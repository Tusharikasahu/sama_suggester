import React, { useState } from "react";
import "./Dashboard.css";

const suggestions = {
  "AI": {
    course: {
      title: "AI for Everyone",
      platform: "Coursera",
      link: "https://www.coursera.org/learn/ai-for-everyone"
    },
    internship: {
      title: "AI Intern",
      platform: "Google",
      link: "https://careers.google.com"
    },
    resume: {
      title: "AI Resume Template",
      link: "https://www.overleaf.com/latex/templates/ai-resume-template"
    }
  },
  "Sustainability": {
    course: {
      title: "Sustainability Strategies",
      platform: "edX",
      link: "https://www.edx.org/course/sustainability-strategies"
    },
    internship: {
      title: "Green Intern",
      platform: "UNDP",
      link: "https://www.undp.org/careers"
    },
    resume: {
      title: "Eco Resume Template",
      link: "https://www.canva.com/resumes/green"
    }
  },
  "Cybersecurity": {
    course: {
      title: "Intro to Cybersecurity",
      platform: "Cisco",
      link: "https://skillsforall.com/course/cybersecurity"
    },
    internship: {
      title: "Security Analyst Intern",
      platform: "KPMG",
      link: "https://home.kpmg/internships"
    },
    resume: {
      title: "Cyber Resume Builder",
      link: "https://novoresume.com"
    }
  },
  "Writing": {
    course: {
      title: "Creative Writing",
      platform: "Udemy",
      link: "https://www.udemy.com/course/creative-writing"
    },
    internship: {
      title: "Content Intern",
      platform: "The Better India",
      link: "https://www.thebetterindia.com/careers"
    },
    resume: {
      title: "Writer’s Resume",
      link: "https://www.resumenerd.com/"
    }
  },
  "Data Science": {
    course: {
      title: "IBM Data Science",
      platform: "Coursera",
      link: "https://www.coursera.org/professional-certificates/ibm-data-science"
    },
    internship: {
      title: "Data Analyst Intern",
      platform: "TCS iON",
      link: "https://learning.tcsionhub.in/hub/internship"
    },
    resume: {
      title: "Data Resume Builder",
      link: "https://resumegenius.com"
    }
  },
  "Design Thinking": {
    course: {
      title: "Design Thinking for Innovation",
      platform: "Coursera",
      link: "https://www.coursera.org/learn/uva-darden-design-thinking-innovation"
    },
    internship: {
      title: "Innovation Intern",
      platform: "SAP",
      link: "https://www.sap.com/about/careers.html"
    },
    resume: {
      title: "Design Resume",
      link: "https://www.canva.com/resumes"
    }
  },
  "Marketing": {
    course: {
      title: "Digital Marketing Basics",
      platform: "Google",
      link: "https://learndigital.withgoogle.com"
    },
    internship: {
      title: "Marketing Intern",
      platform: "Zomato",
      link: "https://www.zomato.com/careers"
    },
    resume: {
      title: "Marketing Resume",
      link: "https://www.visualcv.com/"
    }
  },
  "EdTech": {
    course: {
      title: "EdTech for Teachers",
      platform: "FutureLearn",
      link: "https://www.futurelearn.com/subjects/teaching-courses"
    },
    internship: {
      title: "Learning Intern",
      platform: "BYJU'S",
      link: "https://byjus.com/careers"
    },
    resume: {
      title: "Teaching Resume",
      link: "https://zety.com/resume-builder"
    }
  },
  "Circular Economy": {
    course: {
      title: "Circular Economy 101",
      platform: "Ellen MacArthur Foundation",
      link: "https://learning.ellenmacarthurfoundation.org"
    },
    internship: {
      title: "Circular Intern",
      platform: "Terracycle",
      link: "https://www.terracycle.com/en-IN/about/careers"
    },
    resume: {
      title: "Eco Resume",
      link: "https://enhancv.com/"
    }
  },
  "Climate Action": {
    course: {
      title: "Climate Change Basics",
      platform: "UN CC:eLearn",
      link: "https://unccelearn.org"
    },
    internship: {
      title: "Climate Policy Intern",
      platform: "WWF",
      link: "https://www.wwfindia.org/about_wwf/work_with_us/"
    },
    resume: {
      title: "Climate Resume",
      link: "https://www.canva.com/resumes/environmental/"
    }
  }
};

const Dashboard = ({ user, onLogout }) => {
  const [interest, setInterest] = useState("AI");
  const [showResults, setShowResults] = useState(false);

  const data = suggestions[interest];

  return (
    <div className="dashboard">
      <h2>👋 Welcome, <span>{user?.email?.split("@")[0] || "User"}</span></h2>

      <div className="input-area">
        <label><strong>Select your interest:</strong></label>
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          {Object.keys(suggestions).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
        <button className="show-btn" onClick={() => setShowResults(true)}>🔍 Show Suggestions</button>
      </div>

      {showResults && data && (
        <div className="cards">
          <div className="card">
            <p>📘 <strong>Course:</strong><br />{data.course.title}</p>
            <a href={data.course.link} target="_blank" rel="noreferrer">🔗 {data.course.platform}</a>
          </div>
          <div className="card">
            <p>🧑‍💼 <strong>Internship:</strong><br />{data.internship.title}</p>
            <a href={data.internship.link} target="_blank" rel="noreferrer">🔗 {data.internship.platform}</a>
          </div>
          <div className="card">
            <p>📄 <strong>Resume Builder:</strong></p>
            <a href={data.resume.link} target="_blank" rel="noreferrer">🔗 {data.resume.title}</a>
          </div>
          <div className="card community">
            <p>💬 <strong>Join the Community:</strong></p>
            <a href={`https://t.me/+${interest}-circle`} target="_blank" rel="noreferrer">
              🔗 Join the {interest} Circle
            </a>
          </div>
        </div>
      )}

      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
