"use server";
import { neon } from "@neondatabase/serverless";

const shuffle_teachers = (teachers) => {
    for (let i = teachers.length - 1; i >= 0; i--) {
        let random = Math.floor(Math.random() * teachers.length)
        let temp = teachers[i]
        teachers[i] = teachers[random]
        teachers[random] = temp
    }
    return teachers
}

const transform = (classes, teachers, timings) => {
    let output = []
    for (let i = 0; i < classes.length; i++) {
        let class_number = classes[i].name
        let class_department = classes[i].department

        let available_teachers = []
        let available_times = []

        for (let a = 0; a < teachers.length; a++) {
            if (teachers[a].department === class_department) {
                available_teachers.push(teachers[a])
            }
        }

        for (let a = 0; a < timings.length; a++) {
            if (timings[a].department === class_department) {
                available_times = timings[a].times
            }
        }

        available_teachers = shuffle_teachers(available_teachers)

        for (let a = 0; a < available_teachers.length; a++) {
            output.push({
                "class_number": class_number,
                "name": available_teachers[a].name,
                "department": class_department,
                "subject": available_teachers[a].subject,
                "time": available_times[a]
            })
        }
    }
    return output
}

export async function setTimings() {
    let timings = [
        {
            "department": "CSE",
            "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
        },
        {
            "department": "AI ML",
            "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
        },
        {
            "department": "Data Science",
            "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
        },
        {
            "department": "Cyber Security",
            "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
        },
        {
            "department": "Computer Science",
            "times": ["8-45:9-45", "9-45:10-45", "10-45:11-45", "11-45:12-45", "1-45:2-45", "2-45:3-45"]
        }
    ]

    const sql = neon(process.env.DATABASE_URL);

    if (!timings || timings.length === 0) {
        console.log("No teachers to insert.");
        return;
    }

    const data = sql.transaction(
        timings.map((timings) => sql`INSERT INTO timings (department, times) VALUES (${timings.department}, ${timings.times})`)
    );
    for (const timing of timings) {
        sql`
            INSERT INTO timings (department, times)
            VALUES (${timing.department}, ${JSON.stringify(timing.times)})
            ON CONFLICT (department) DO UPDATE SET times = EXCLUDED.times;
        `;
    }
    // console.log(`Inserted ${data.length} teachers.`);
    // return data;
}

function groupByDepartment(data) {
    return data.reduce((acc, row) => {
        const dept = row.department;
        if (!acc[dept]) acc[dept] = [];
        acc[dept].push(row);
        return acc;
    }, {});
}

export async function generateRoutine() {
    const sql = neon(process.env.DATABASE_URL);
    const classes = await sql`SELECT * FROM classes`;
    const teachers = await sql`SELECT * FROM teachers`;
    // const timings = await sql`SELECT * FROM timings`;

    let timings = [
        {
            "department": "CSE",
            "times": ["8:45 - 9:45", "9:45 - 10:45", "10:45 - 11:45", "11:45 - 12:45", "1:45 - 2:45", "2:45 - 3:45"]
        },
        {
            "department": "AI ML",
            "times": ["8:45 - 9:45", "9:45 - 10:45", "10:45 - 11:45", "11:45 - 12:45", "1:45 - 2:45", "2:45 - 3:45"]
        },
        {
            "department": "Cyber Security",
            "times": ["8:45 - 9:45", "9:45 - 10:45", "10:45 - 11:45", "11:45 - 12:45", "1:45 - 2:45", "2:45 - 3:45"]
        }
    ]
    // await sql.transaction(
    //     teachers.map((teacher) => sql`INSERT INTO teachers (name, department, subject) VALUES (${teacher.name}, ${teacher.department}, ${teacher.subject})`)
    // );
    console.log(timings)

    let output = transform(classes, teachers, timings)
    // console.log(output)

    const grouped = groupByDepartment(output);
    // console.log(grouped)
    return grouped
}

export async function saveRoutine(output) {
    const sql = neon(process.env.DATABASE_URL);
    try {
        await sql`INSERT INTO routines (routine) VALUES (${JSON.stringify(output)})`;
        return 1
    } catch (err) {
        console.log(err)
        return 0
    }
}

export async function getRoutine(output) {
    const sql = neon(process.env.DATABASE_URL);
    try {
        let data = await sql`SELECT * FROM routines`;
        data = JSON.parse(data[data.length - 1].routine)
        return data
    } catch (err) {
        console.log(err)
        return 0
    }
}
