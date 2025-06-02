from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = {
    "AI": {
        "course": {
            "title": "AI for Everyone",
            "platform": "Coursera",
            "link": "https://coursera.org/ai-for-everyone"
        },
        "internship": {
            "title": "AI Intern",
            "company": "Google AI",
            "link": "https://internships.google.com/ai"
        },
        "resume": "https://resume.io/templates/ai"
    },
    "Design": {
        "course": {
            "title": "Intro to UX Design",
            "platform": "Udemy",
            "link": "https://udemy.com/design"
        },
        "internship": {
            "title": "Design Intern",
            "company": "Canva",
            "link": "https://canva.com/careers"
        },
        "resume": "https://resume.io/templates/design"
    },
    "Writing": {
        "course": {
            "title": "Creative Writing Basics",
            "platform": "edX",
            "link": "https://edx.org/writing"
        },
        "internship": {
            "title": "Content Writer Intern",
            "company": "Medium",
            "link": "https://medium.com/internships"
        },
        "resume": "https://resume.io/templates/writing"
    },
    "Marketing": {
        "course": {
            "title": "Digital Marketing 101",
            "platform": "Coursera",
            "link": "https://coursera.org/marketing"
        },
        "internship": {
            "title": "Marketing Intern",
            "company": "HubSpot",
            "link": "https://hubspot.com/internships"
        },
        "resume": "https://resume.io/templates/marketing"
    },
    "Cybersecurity": {
        "course": {
            "title": "Intro to Cybersecurity",
            "platform": "Cisco Networking Academy",
            "link": "https://skillsforall.com"
        },
        "internship": {
            "title": "Cybersecurity Intern",
            "company": "Palo Alto Networks",
            "link": "https://paloaltonetworks.com/careers"
        },
        "resume": "https://resume.io/templates/cybersecurity"
    },
    "HR": {
        "course": {
            "title": "HR Fundamentals",
            "platform": "LinkedIn Learning",
            "link": "https://linkedin.com/learning/hr"
        },
        "internship": {
            "title": "HR Intern",
            "company": "Unilever",
            "link": "https://unilever.com/careers"
        },
        "resume": "https://resume.io/templates/hr"
    },
    "Data Science": {
        "course": {
            "title": "Data Science Specialization",
            "platform": "Coursera",
            "link": "https://coursera.org/data-science"
        },
        "internship": {
            "title": "Data Intern",
            "company": "Kaggle",
            "link": "https://kaggle.com/jobs"
        },
        "resume": "https://resume.io/templates/data"
    },
    "Web Development": {
        "course": {
            "title": "The Web Developer Bootcamp",
            "platform": "Udemy",
            "link": "https://udemy.com/webdev"
        },
        "internship": {
            "title": "Frontend Intern",
            "company": "GitHub",
            "link": "https://github.com/interns"
        },
        "resume": "https://resume.io/templates/web"
    },
    "Sustainability": {
        "course": {
            "title": "Sustainability in Practice",
            "platform": "edX",
            "link": "https://edx.org/sustainability"
        },
        "internship": {
            "title": "Sustainability Intern",
            "company": "UNDP",
            "link": "https://undp.org/internships"
        },
        "resume": "https://resume.io/templates/sustainability"
    },
    "Entrepreneurship": {
        "course": {
            "title": "How to Start a Startup",
            "platform": "Startup School",
            "link": "https://startupschool.org"
        },
        "internship": {
            "title": "Founder’s Associate Intern",
            "company": "Techstars",
            "link": "https://techstars.com/interns"
        },
        "resume": "https://resume.io/templates/entrepreneur"
    }
}

@app.route("/suggest", methods=["POST"])
def suggest():
    interest = request.json.get("interest")
    if interest in data:
        return jsonify(data[interest])
    else:
        return jsonify({"error": "Interest not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
