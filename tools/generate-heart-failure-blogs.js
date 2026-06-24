const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const professorLinks = {
  linkedin: "https://www.linkedin.com/in/drbilalphd/",
  scholar: "https://scholar.google.com.au/citations?user=8nZ0jVkAAAAJ&hl=en",
  facebook: "https://www.facebook.com/Dr.BilalAhm",
};

const legacyPosts = [
  {
    number: 1,
    title: "From MDCAT Dreams to Engineering Reality",
    slug: "mdcat-dreams-to-engineering-reality",
    date: "March 21, 2026",
    readTime: "11 min read",
    category: "Student Journey",
    cover: "/assets/illustrations/journal-cover.svg",
    alt: "Illustration showing a student moving from medical goals toward an engineering future.",
    excerpt:
      "A first-person reflection on missing MDCAT by a small margin, choosing computer engineering, and learning how one changed dream can still become a serious direction.",
    note:
      "This was the beginning of my engineering identity: accepting a changed path and still deciding to build something meaningful.",
    themes: ["Engineering Journey", "Resilience", "Digital Footprint"],
    tags: ["Student Journey", "Engineering", "Reflection"],
    sections: [
      ["The Dream That Changed Direction", [
        "Before I entered computer engineering, my mind was attached to MDCAT and the medical field. Like many students, I had imagined one clear path for myself, and I thought that if I worked hard enough, that path would open exactly as planned. When the result came and I missed the target by a small margin, it felt heavier than I expected. It was not only about marks. It felt like a version of my future had suddenly closed.",
        "At that time, I did not immediately understand how to respond. A narrow miss is difficult because it keeps a person thinking about what could have happened with only a little more preparation, a little more luck, or a little less pressure. For some days, I kept comparing myself with the dream I had carried. But slowly I understood that life was not asking me to stop. It was asking me to redirect my effort.",
        "Choosing computer engineering at UET Lahore, Faisalabad Campus, became that redirection. It was not a casual decision. I wanted a field where logic, technology, problem solving, and real-world impact could still come together. Engineering gave me that possibility. The path was different from medicine, but it still demanded discipline, study, and purpose.",
      ]],
      ["Entering Engineering With Mixed Feelings", [
        "When I joined engineering, I carried both hope and uncertainty. I was grateful for the opportunity, but I also knew I was entering a field where many students already had more exposure to computers and programming. I had to accept that I was not starting from comfort. I was starting from a place where I needed to rebuild confidence.",
        "The early days taught me that a student can feel behind and still move forward. Computer engineering was new for me, but the habit of hard work was not new. What changed was the subject, the environment, and the kind of thinking required. Instead of memorizing biological terms, I had to understand logic, systems, circuits, databases, and programming structures.",
        "This transition became one reason I started valuing a portfolio blog. A portfolio does not only show achievements after they are polished. It can also show the process of becoming. When Dr. Bilal Ahmad suggested building a digital footprint as students, I understood it as a chance to document not only success but also the honest journey behind success.",
      ]],
      ["Finding Guidance in the New Field", [
        "In the first year, teachers mattered a lot because they shaped how I saw the field. Dr. Bilal Ahmad taught us Programming Fundamentals and Database Systems, and his approach helped connect engineering with practical value. He is an expert in AI, ML, and DL model training, but what influenced me most was how he connected technical learning with real problems.",
        "He often encouraged us to work with meaningful datasets, especially medical datasets, because they are usually collected with care and precision. For me, that was interesting because my first dream was connected with medicine, and now computer engineering was giving me another way to engage with medical problems through data, databases, and machine learning. That connection made the changed path feel less like a loss and more like a new form of possibility.",
        "This is why my later Heart Failure Prediction System project felt personal in a small way. It joined the medical world I once wanted with the engineering world I had entered. I was no longer trying to become a doctor, but I was learning how technology can support health-related analysis. That realization gave me motivation.",
      ]],
      ["Why This First Reflection Belongs on My Portfolio", [
        "Writing this blog matters because it explains where my engineering journey started emotionally. A portfolio should not only list tools and projects. It should also show the person behind the work. My first step into engineering came after disappointment, adjustment, and a decision to keep building.",
        "This practice of writing is useful because it creates a record that can grow with me. If someone reads my portfolio later, they will see that my technical journey did not begin perfectly. It began with a changed dream, a difficult acceptance, and then a serious effort to make the new path valuable. That is a real student experience.",
        "I now see computer engineering as a field where I can still work on meaningful problems. The direction changed, but the desire to do useful work remained. That is why this first blog belongs before the technical posts. It gives context to the student who later started learning programming, databases, machine learning, and project deployment. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 2,
    title: "A Late Start: When First Semester Was Already Half Gone",
    slug: "a-late-start-when-first-semester-was-already-half-gone",
    date: "March 28, 2026",
    readTime: "11 min read",
    category: "Academic Reflection",
    cover: "/assets/illustrations/late-start-semester.svg",
    alt: "Illustration of a delayed semester start with notes, a clock, and a half-complete timeline.",
    excerpt:
      "A reflection on entering the semester late, facing pressure near mid exams, and learning that preparation cannot be delayed without consequences.",
    note:
      "A late start taught me that catching up is possible, but it costs much more energy than staying consistent from the beginning.",
    themes: ["First Semester", "Time Management", "Academic Pressure"],
    tags: ["First Semester", "Discipline", "Reflection"],
    sections: [
      ["Starting When Everyone Else Had Already Moved Ahead", [
        "One of the hardest parts of my first semester was feeling that I had entered the race after it had already started. By the time I began taking the semester seriously, many classmates had already adjusted to the routine, the teachers, the subjects, and the speed of university life. I was still trying to understand where I stood.",
        "This late start affected my confidence. In school and college, I had known how to prepare for exams in a familiar pattern. University felt different. The lectures moved quickly, labs required practice, and assignments could not be handled only by last-minute memorization. When mid exams came closer, I realized that I had underestimated the pace.",
        "Programming Fundamentals was especially challenging because it required continuous practice. Dr. Bilal Ahmad taught us this course, and I slowly understood that programming cannot be learned only by reading notes. It has to be written, tested, corrected, and repeated. That lesson came to me late, but it came strongly.",
      ]],
      ["The Pressure of Pending Work", [
        "The busiest weeks made the late start very obvious. Assignments were pending, quizzes were coming, and multiple subjects demanded attention at the same time. Digital Logic Design, Database Systems, and object-oriented concepts created pressure from different directions. We would go early, return tired, and sometimes barely find time to eat properly.",
        "The pressure felt worse because I knew part of it came from my own delay. When preparation is postponed, normal work starts feeling like a mountain. A quiz that could have been manageable becomes stressful. A lab task that could have been practiced becomes frightening. This was one of the first hard lessons of university.",
        "Still, those weeks also showed me that pressure can reveal weaknesses clearly. I could see where I lacked routine, where I needed better planning, and where I was depending too much on emergency effort. That realization was uncomfortable, but it was useful.",
      ]],
      ["Learning the Cost of Delay", [
        "The main lesson I learned was that consistency is cheaper than recovery. If I had prepared earlier, I would still have faced difficulty, but it would not have felt so overwhelming. Because I delayed, I had to study under stress, revise quickly, and handle tasks without the calmness that comes from preparation.",
        "In Database Systems, this lesson connected with project work too. Dr. Bilal Ahmad guided us toward meaningful implementation, and projects like database design or machine learning cannot be completed well through panic. They need step-by-step progress. A database design requires understanding the dataset, identifying entities, creating tables, checking relationships, and normalizing structure. These stages need time.",
        "The late start taught me that university rewards regular effort. Even small daily progress can reduce the pressure of exams and assignments. I did not learn this lesson from advice only. I learned it from stress, fatigue, and the feeling of trying to catch up quickly.",
      ]],
      ["How I Want to Improve", [
        "After that experience, I promised myself that I would prepare things on time in the future. This does not mean I became perfect immediately, but my awareness changed. I started understanding that discipline is not only about working hard. It is about working early enough so that hard work can be effective.",
        "Writing this blog is part of that improvement because it turns a difficult experience into a record. A digital portfolio should show growth, and growth includes mistakes. If I only write about achievements, the story becomes incomplete. The late start was a real part of my semester, so it deserves to be documented.",
        "Today, when I look at my project journey from databases to machine learning, I can see how important timing is. Dataset selection, ER diagram design, model training, and deployment planning all require patience. The lesson from my late start follows me into every technical task: start earlier, stay consistent, and do not wait for pressure to become the teacher. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 3,
    title: "Walking into Programming Fundamentals with Zero Background",
    slug: "walking-into-programming-fundamentals-with-zero-background",
    date: "April 4, 2026",
    readTime: "11 min read",
    category: "Programming Fundamentals",
    cover: "/assets/illustrations/programming-zero-background.svg",
    alt: "Illustration of a student learning programming fundamentals from scratch.",
    excerpt:
      "A first-hand account of learning Python, variables, loops, functions, and logic when I had no previous programming background.",
    note:
      "Programming looked confusing at first, but practice slowly changed it from fear into a language of problem solving.",
    themes: ["Python", "Logic Building", "Beginner Learning"],
    tags: ["Programming Fundamentals", "Python", "Learning Journey"],
    sections: [
      ["Entering Programming Without a Base", [
        "Programming Fundamentals was one of the courses that made me feel the difference between school learning and engineering learning. I entered it with almost no coding background. Some students already knew basic programming ideas, but for me even simple terms like variables, loops, and functions needed serious attention.",
        "At first, Python looked simple because the syntax seemed readable. But when I had to solve problems myself, I realized that programming is not only about reading code. It is about thinking in steps. The computer does exactly what we tell it, and if our logic is incomplete, the output exposes it immediately.",
        "Dr. Bilal Ahmad taught us Programming Fundamentals, and his course made me understand that programming is the base for many later fields. Database work, machine learning, and deployment all become easier when programming logic becomes stronger. I did not understand this fully in the beginning, but later projects proved it.",
      ]],
      ["The Confusion Around Logic", [
        "The hardest part was not typing code. The hardest part was forming logic. I could understand an example when someone explained it, but writing a solution from scratch was different. A loop made sense in theory, but deciding where to start it, when to stop it, and what to update inside it required practice.",
        "Functions also took time. At first, I saw them as extra complexity. Later I understood that functions help organize code and avoid repetition. This lesson became useful in machine learning too, where preprocessing, training, prediction, and evaluation can be separated into clean steps.",
        "Debugging was another new experience. Errors felt frustrating, but they also forced me to read carefully. A missing colon, wrong indentation, or incorrect variable name could stop the program. Slowly, I learned that errors are not always failure. Sometimes they are the program telling us exactly where our thinking needs correction.",
      ]],
      ["Connecting Programming With Real Problems", [
        "The importance of programming became clearer when I saw how it connects with real projects. In the Heart Failure Prediction System, Python was used to load data, visualize it, encode categorical values, split the dataset, train models, evaluate predictions, and save the trained model. Without Programming Fundamentals, those later steps would have felt impossible.",
        "This is why Dr. Bilal Ahmad's guidance about real-world datasets mattered. Programming becomes more meaningful when it is connected to a problem that has value. Medical datasets, especially, show how code can support analysis in serious domains. Even as students, we can learn how software and data can work together.",
        "When I think about AI, ML, and DL now, I understand that they are not separate from basic programming. They are built on it. A model may sound advanced, but the workflow still depends on variables, conditions, functions, libraries, files, and logic. My beginner struggle was part of the foundation.",
      ]],
      ["How Zero Background Became a Starting Point", [
        "Having zero background was difficult, but it also gave me a clear view of my own progress. Every small concept I understood felt like a real step. The first correct program, the first loop that worked, the first function that returned the expected value, and the first project output all mattered.",
        "This blog belongs on my portfolio because many students start from zero and feel embarrassed about it. I want my digital footprint to show that starting late or starting weak is not the end. The important thing is to continue practicing until confusion becomes understanding.",
        "Programming Fundamentals gave me the language I later used in database and machine learning work. It taught me patience, precision, and logical thinking. I still have a long way to go, but this course changed the way I approach technical problems. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 4,
    title: "Learning Under Pressure: Nights of Self-Study",
    slug: "learning-under-pressure-nights-of-self-study",
    date: "April 11, 2026",
    readTime: "11 min read",
    category: "Self Study",
    cover: "/assets/illustrations/self-study-nights.svg",
    alt: "Illustration of late-night study with code notes and a laptop.",
    excerpt:
      "A reflection on late-night self-study, missed concepts, lab pressure, and the discipline that slowly helped me recover.",
    note:
      "Self-study became the place where panic slowly turned into practice.",
    themes: ["Self Study", "Discipline", "Practice"],
    tags: ["Self Study", "Programming Practice", "Discipline"],
    sections: [
      ["Why Nights Became Study Time", [
        "There were many nights in the semester when I studied because I had no other option. The day would pass in classes, labs, travel, and fatigue, and then the real catching up started at night. It was not always ideal, but it became part of my routine during the difficult weeks.",
        "The pressure came from missed concepts and pending work. When I did not understand something in class, I had to return to it later on my own. Programming examples, database concepts, and lab tasks all needed extra time. At night, the noise of the day reduced, and I could finally sit with the problem.",
        "This self-study was not glamorous. Sometimes I felt sleepy, sometimes frustrated, and sometimes worried about whether I would ever become comfortable with the subjects. But those nights also built a habit of not giving up quickly.",
      ]],
      ["Covering Missed Programming Concepts", [
        "A major part of my self-study was Programming Fundamentals. I practiced loops, conditions, functions, lists, and small Python programs. At first, even simple problems could take a lot of time. But each solved problem gave me a little more confidence.",
        "Dr. Bilal Ahmad's Programming Fundamentals course made it clear that concepts need practice. Listening in class was important, but practice was where the concept became mine. If I could write the logic myself without copying, then I knew I had actually learned something.",
        "The same habit later helped me in machine learning. When I worked with Pandas, Scikit-learn, encoding, train-test split, and model evaluation, I was still depending on the basic logic I had practiced earlier. Late-night self-study was quietly preparing me for bigger tasks.",
      ]],
      ["Managing Stress Before Labs and Quizzes", [
        "Labs and quizzes created a different kind of pressure because they tested understanding quickly. A student can read theory, but a lab asks for action. If the concept is weak, the weakness appears immediately. This made preparation stressful, especially when multiple subjects had assessments close together.",
        "I learned that stress becomes worse when tasks are unclear. So I started breaking work into smaller parts. Instead of thinking, I have to learn everything, I would choose one concept, one program, or one query. This made the work more manageable.",
        "In Database Systems, this helped me understand SQL and design steps gradually. Creating a database, defining tables, inserting data, applying normalization, and generating an ER diagram all became easier when treated as a sequence. This is also how Dr. Bilal Ahmad encouraged project thinking: step by step, with practical value in mind.",
      ]],
      ["The Value of Quiet Improvement", [
        "Self-study taught me that improvement is not always visible immediately. Some nights felt unproductive, but the effect appeared later when a concept became easier or a task took less time. This kind of progress is quiet, but it is real.",
        "Writing about these nights is important because a portfolio should not show only final polished outcomes. Behind every project screenshot, there are hours of confusion, searching, trying, failing, and trying again. Those hours are part of the learning process.",
        "Now when I look at my Database to ML project journey, I can see the value of those study nights. The discipline I built while catching up helped me handle dataset analysis, MySQL Workbench, Python preprocessing, and ML training. Pressure was not pleasant, but it forced me to become more serious. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
        "This experience also changed how I want to present myself online. If my GitHub portfolio only shows final results, it misses the hidden effort behind them. By writing about self-study honestly, I can show that my technical growth came through repeated attempts, not instant understanding. That is a valuable part of my digital footprint as a computer engineering student.",
      ]],
    ],
  },
  {
    number: 5,
    title: "My First Achievement: Machine Learning Project",
    slug: "my-first-achievement-machine-learning-project",
    date: "April 18, 2026",
    readTime: "11 min read",
    category: "Machine Learning",
    cover: "/assets/illustrations/machine-learning-project.svg",
    alt: "Illustration of a machine learning dashboard with charts and code.",
    excerpt:
      "A reflection on my first machine learning achievement and how it changed the way I saw programming, data, and real-world problem solving.",
    note:
      "My first ML project showed me that code can become evidence of learning.",
    themes: ["Machine Learning", "Python Project", "Achievement"],
    tags: ["Machine Learning", "Python Project", "Achievement"],
    sections: [
      ["Why the First Project Felt Important", [
        "My first machine learning project felt like an achievement because it changed my relationship with programming. Before that, programming often felt like a subject I had to survive. A project made it feel like a tool I could use to build something visible. That shift was important for my confidence.",
        "A project is different from a single exercise. It asks the student to connect multiple ideas and produce an outcome. Data has to be understood, code has to be written, errors have to be solved, and results have to be explained. This complete process made the work feel meaningful.",
        "Dr. Bilal Ahmad often encourages students to use machine learning on problems that have real value. His expertise in AI, ML, and DL model training made this direction feel serious. I started understanding that machine learning is not only about algorithms; it is about choosing a problem, preparing data, training carefully, and interpreting results responsibly.",
      ]],
      ["Applying Python Beyond Basic Practice", [
        "The project helped me apply Python beyond small programs. I had to think about libraries, data handling, model training, and output. Even if the project was beginner-level, it showed me the path from code to result. That was exciting because I could finally see why earlier programming concepts mattered.",
        "Python became more than syntax. It became a way to work with data. Pandas could load tables, visualization libraries could show patterns, and Scikit-learn could train models. These tools made me feel that computer engineering connects directly with real-world analysis.",
        "This experience prepared me for the later Heart Failure Prediction System. In that project, I used the same general thinking but with a stronger pipeline: dataset selection, database design, CSV export, preprocessing, Random Forest training, confusion matrix evaluation, model saving, and inference.",
      ]],
      ["The Exhibition Feeling", [
        "One of the proud moments was being able to present project work instead of only submitting it silently. Standing beside a project gives a different feeling. It makes the work public. It also forces the student to explain what was done, why it was done, and how it works.",
        "The Database Systems Exhibition later gave me an even stronger version of that feeling. My heart failure prediction work was not only a file on my laptop. It became something I could connect with a banner, a GUI, an ER diagram, and a full project story. That kind of presentation helps a student grow.",
        "A portfolio blog extends the exhibition feeling online. It lets the project remain visible after the event ends. This is one of the advantages of maintaining a GitHub portfolio: the learning does not disappear inside a folder. It becomes part of a public academic identity.",
      ]],
      ["What This Achievement Taught Me", [
        "My first ML achievement taught me that technical confidence grows through building. Reading is necessary, but building gives proof. When I can point to a project and explain its parts, I feel that the learning has become more real.",
        "It also taught me that machine learning depends on earlier foundations. Programming fundamentals, database thinking, data cleaning, and evaluation all matter. A model is only one part of the system. The surrounding workflow decides whether the project is understandable and useful.",
        "This blog is placed before the detailed Database to ML series because it shows the emotional beginning of my project confidence. From this point, I could move toward a more complete system: the Heart Failure Prediction System using database design and machine learning. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
        "It also helped me understand why Dr. Bilal Ahmad asks students to document their work. A project becomes more powerful when the student can explain the thinking behind it. Screenshots show output, but writing shows reflection, and reflection is what turns a small achievement into a step in a larger learning journey.",
      ]],
    ],
  },
];

const posts = [
  {
    number: 1,
    title: "Introduction to Databases: Where My Heart Failure Prediction Project Began",
    slug: "introduction-to-databases-heart-failure-project",
    date: "June 1, 2026",
    readTime: "11 min read",
    category: "Database Systems",
    cover: "/assets/project-report/heart-failure-project-02.jpeg",
    alt: "Project report screenshot showing the heart failure prediction system coursework.",
    excerpt:
      "My first serious view of databases came through a heart failure prediction project where data stopped feeling like rows in a file and started looking like a system.",
    note:
      "A database became meaningful when I saw it as the foundation for a real prediction system, not just as a table full of values.",
    themes: ["Database basics", "Digital footprint", "Real-world data"],
    sections: [
      ["What a Database Started to Mean to Me", [
        "When I first heard the word database in class, I honestly thought of it as a place where information is stored. That definition was correct, but it was too small. During my second semester at UET Lahore, Faisalabad Campus, the meaning became much wider for me because our Database Systems project was not about storing random values. It was about designing the data foundation for a heart failure prediction system. That changed the way I looked at every column, every patient record, and every relationship inside the project.",
        "The project was supervised by Dr. Bilal Ahmad, who taught us Database Systems and Programming Fundamentals. His teaching style pushed us toward practical problems, especially problems where the data has real value. He often connects computer engineering with artificial intelligence, machine learning, and deep learning, and he encourages the use of medical datasets because they are usually collected with more care, precision, and seriousness. That guidance made my project feel connected to something larger than a normal lab task.",
        "I selected the heart failure prediction dataset from Kaggle because it was structured, documented, and related to a real-world medical problem. The dataset included patient attributes such as age, sex, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, resting ECG, maximum heart rate, exercise angina, oldpeak, ST slope, and the target variable HeartDisease. Seeing those features together helped me understand that a database is not just storage. It is an organized memory of a problem.",
      ]],
      ["From Files to Organized Data", [
        "Before this course, I could imagine data in Excel sheets or CSV files. A file can hold data, but it does not automatically explain the structure of a problem. A database adds discipline. It gives names, types, keys, constraints, and relationships to the information. In my heart failure project, that discipline mattered because every patient record had to remain meaningful when moved from the raw dataset into MySQL Workbench.",
        "I also began to understand why data management evolved. If a project only has a few values, a simple file may be enough. But when the project grows, the risk of duplicated data, inconsistent values, missing records, and weak security also grows. A database management system gives tools to reduce those problems. This was one of the first lessons that made the course feel practical rather than theoretical.",
        "The real turning point was realizing that a database gives a project a stable backbone. Later in the project, when I moved toward machine learning, the dataset had already passed through analysis, organization, and database design. That made the ML phase easier to trust because the input data was not floating loosely. It had already been examined and structured.",
      ]],
      ["The Types and Components I Started Recognizing", [
        "In class, we discussed different types of databases, and the project helped me understand why relational databases are still so important. MySQL was suitable because the data could be represented in tables with clear attributes and relationships. A patient could be linked with clinical details, ECG details, diagnosis, and risk assessment. These links made the project more understandable than one large unorganized table.",
        "I also started noticing the role of DBMS components. Tables held the data, queries allowed me to retrieve and transform it, schemas defined structure, constraints protected consistency, and the ER diagram helped me visualize the design. MySQL Workbench made these ideas visible. It was not only a tool for writing SQL; it became a workspace where the logic of the project could be checked and improved.",
        "This experience also helped me understand the value of building a digital footprint as a student of computer engineering. A portfolio blog records the process behind learning, not only the final output. This practice was suggested by Dr. Bilal Ahmad, Professor at UET Lahore, Faisalabad Campus, and I now understand why it matters. It shows growth, documents mistakes, and creates evidence of the skills a student is building.",
      ]],
      ["Why This First Step Matters", [
        "The first blog in this journey matters because everything else depends on it. If I do not understand what a database is, I cannot properly design one. If I cannot design one, I cannot prepare clean data for machine learning. If I cannot prepare clean data, the model may produce results that look technical but are not reliable.",
        "That is why my introduction to databases became more than a chapter title. It became the beginning of a complete project journey: from selecting a real-world dataset, to designing a relational database, to exporting data, to training a machine learning model, and then thinking about deployment. This connection between database design and ML gave the semester a clear direction.",
        "Looking back, I feel that a database is one of the quiet foundations of computer engineering. It does not always look dramatic, but without it, modern systems lose their structure. My heart failure prediction project helped me see that the real strength of software often begins before the interface, before the model, and before the final output. It begins with the way we respect and organize data. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 2,
    title: "Understanding the Actual Purpose of Databases in a Medical Prediction System",
    slug: "actual-purpose-of-databases-medical-prediction",
    date: "June 3, 2026",
    readTime: "12 min read",
    category: "Database Purpose",
    cover: "/assets/project-report/heart-failure-project-03.jpeg",
    alt: "Screenshot from the database project showing heart failure dataset work.",
    excerpt:
      "This post reflects on why databases exist, what problems they solve, and why data integrity became serious when the dataset represented patient health factors.",
    note:
      "A database protects meaning. It keeps a project from becoming a pile of disconnected values.",
    themes: ["Data integrity", "Security", "Business value"],
    sections: [
      ["Why Databases Exist", [
        "The actual purpose of databases became clearer to me when I stopped thinking about them as only storage. Storage is one part of the story, but the deeper purpose is control, consistency, and trust. In my heart failure prediction project, the data represented patient-related health attributes. Even though this was an academic dataset, the topic itself demanded seriousness. Age, cholesterol, blood pressure, ECG result, and heart disease status are not ordinary values. They carry meaning, and that meaning should not be damaged by careless handling.",
        "During Database Systems, Dr. Bilal Ahmad repeatedly guided us toward real-world thinking. He did not want us to treat a dataset as decoration for a project. He wanted us to ask whether the source was authentic, whether the data had value, and whether the design could support future analysis. That mindset helped me understand why databases exist in modern systems. They exist because data becomes useful only when it can be trusted, updated, protected, and retrieved correctly.",
        "For this project, I selected the Kaggle heart failure prediction dataset after checking that it had documentation, a clear structure, and relevance to the problem. I also noticed that not every available dataset is reliable. Some datasets look attractive at first, but they lack explanation, source quality, or completeness. This searching process made me realize that the purpose of a database begins even before table creation. It begins with choosing data that deserves to be structured.",
      ]],
      ["Problems Solved by Databases", [
        "A major problem databases solve is redundancy. If the same patient information is repeated in many places, one small change can create inconsistency. For example, if age, diagnosis, ECG information, and risk level are all stored together without structure, the system becomes harder to maintain. A normalized database separates information into meaningful tables and connects them through keys. This reduces repeated data and makes the system cleaner.",
        "Another problem is retrieval. A CSV file can be opened and read, but it does not give the same power as SQL queries. In MySQL Workbench, I could create tables, insert records, and query specific information. That helped me see why databases are used in hospitals, banks, universities, and companies. These organizations need fast access to accurate information, and they cannot depend on scattered files for serious operations.",
        "Databases also solve the problem of uncontrolled change. In a proper DBMS, data types, constraints, primary keys, and foreign keys protect the structure. They make sure that records follow rules. When I designed the Patient, Clinical Details, ECG Details, Diagnosis, and Risk Assessment tables, I saw how foreign keys could preserve the connection between one patient and their related medical information.",
      ]],
      ["Integrity, Security, and Real Value", [
        "Data integrity became one of the strongest lessons of the project. If the database allows incorrect or inconsistent values, the machine learning model can learn from weak input. That means database design affects model quality. This was important because our final system aimed to predict whether a patient may have heart disease based on medical attributes. A model may look advanced, but it depends on the quality of the data behind it.",
        "Security was another concept that started to make more sense. In real medical systems, patient data must be protected. Even though my project used an open academic dataset, the subject helped me imagine real-world responsibilities. A database is not just a technical structure; it is also part of ethical data handling. Access control, reliable storage, and careful design matter when data belongs to people.",
        "The business benefits of databases also became visible. A good database saves time, reduces errors, supports analysis, and improves decision-making. In a healthcare setting, organized data can support dashboards, predictions, reports, and research. This connects closely with the direction Dr. Bilal Ahmad often emphasizes: using AI, ML, and DL on problems that have practical value, especially where high-quality datasets can lead to meaningful insights.",
      ]],
      ["Modern Data-Driven Systems", [
        "Modern systems are data-driven. Whether it is a web app, a hospital dashboard, an online store, or a machine learning pipeline, data is usually at the center. My project helped me see that a database is not a separate topic from machine learning. It is part of the same journey. The database organizes data, the preprocessing step prepares it, the model learns from it, and the deployment layer makes it usable.",
        "This is why writing about the project on a portfolio is useful. It documents the journey from raw understanding to practical implementation. A portfolio blog also improves my digital footprint as a computer engineering student because it shows not only what I built, but how I thought through it. Anyone can list tools, but a blog explains the learning process behind those tools.",
        "I now understand databases as a discipline of responsibility. They solve technical problems, but they also support trust. In my heart failure prediction project, the database made the ML part stronger because it forced me to slow down and respect the structure of the data. That lesson will stay with me beyond this semester. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 3,
    title: "Deep Dive into Databases: Tables, Keys, Relationships, and ACID Thinking",
    slug: "deep-dive-databases-tables-keys-relationships",
    date: "June 5, 2026",
    readTime: "12 min read",
    category: "Relational Design",
    cover: "/assets/project-report/heart-failure-project-04.jpeg",
    alt: "Screenshot showing database design and schema work in the project report.",
    excerpt:
      "A detailed reflection on the database concepts that became practical when I separated the heart failure dataset into related tables.",
    note:
      "Tables became clearer when each table had a reason to exist and each key had a job to do.",
    themes: ["Keys", "Constraints", "Normalization"],
    sections: [
      ["Tables, Records, and Attributes", [
        "The deeper I went into the heart failure prediction project, the more I realized that relational databases are built on simple ideas used with discipline. A table looks simple from the outside, but it becomes powerful when every row and column has a clear purpose. In the raw dataset, each record represented one patient, and each attribute represented one health-related feature. At first, that looked manageable as one table, but the design improved when I began separating related groups of information.",
        "The Patient table held basic patient identity and demographic information such as PatientID, Age, Sex, and AgeGroup. Clinical Details handled attributes like RestingBP, Cholesterol, FastingBS, MaxHR, Oldpeak, and categories created from those values. ECG Details stored chest pain type, resting ECG, exercise angina, and ST slope. Diagnosis stored the HeartDisease target variable. Risk Assessment stored the risk score and risk level. This separation made the project easier to understand.",
        "This was the moment when database theory became visible in my own work. Dr. Bilal Ahmad had taught Database Systems as a course where concepts should become implementation. When I created these tables in MySQL Workbench, I was not only writing SQL. I was making decisions about how the medical data should be represented.",
      ]],
      ["Keys and Constraints", [
        "Primary keys and foreign keys became especially important in this project. The PatientID acted as the central identity for each patient. Without it, the tables would become disconnected. With it, every clinical record, ECG record, diagnosis record, and risk assessment could be linked back to the correct patient. That link is what made the relational design meaningful.",
        "Constraints also helped me understand how databases protect data quality. A primary key prevents duplicate identity confusion. A foreign key ensures that a related record cannot exist without a valid patient. Data types ensure that numbers, text, and categories are stored in suitable formats. These are not just formal rules. They are protective boundaries around the project.",
        "In a medical prediction context, this protection matters even more. If a diagnosis is linked to the wrong patient, the meaning of the dataset collapses. If clinical data is repeated or inconsistent, the model can become less reliable. This project helped me see that database constraints support the honesty of the whole system.",
      ]],
      ["Relationships and Normalization", [
        "Database relationships made the design feel like a map. The Patient table was the central table, and other tables connected to it through PatientID. This one-to-one or one-to-many style of thinking made the dataset more organized. Instead of seeing all columns as a flat list, I started seeing groups of meaning.",
        "Normalization was the next step. In 1NF, I ensured that attributes had atomic values and no repeating groups. In 2NF, I checked that non-key attributes depended properly on the key. In 3NF, I removed transitive dependencies so that non-key attributes did not depend unnecessarily on other non-key attributes. These steps reduced redundancy and improved consistency.",
        "Before doing this project, normalization felt like a theoretical topic that could be memorized for exams. After implementing it, I understood why it exists. A normalized database is easier to update, easier to understand, and less likely to produce contradictions. That is especially useful when the database will later support machine learning.",
      ]],
      ["Transactions and ACID Thinking", [
        "Although my project focused more on design, the idea of transactions and ACID properties also became easier to appreciate. Atomicity, Consistency, Isolation, and Durability explain why databases are trusted in serious systems. In real healthcare software, a patient update should either complete properly or not happen at all. The database should remain consistent even when multiple users or processes interact with it.",
        "This made me think about databases beyond assignments. A hospital system, for example, cannot afford random partial updates or unreliable records. Even if my project was academic, the same principles point toward real software engineering. The more serious the domain, the more important the database discipline becomes.",
        "This deep dive gave me confidence because it joined theory with implementation. I could look at the project and identify tables, records, attributes, primary keys, foreign keys, constraints, relationships, and normalization decisions. That is the kind of understanding I wanted my portfolio to show: not only that I completed a project, but that I learned the thinking behind it. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 4,
    title: "Designing the Actual Database for My Heart Failure Dataset",
    slug: "designing-actual-database-heart-failure-dataset",
    date: "June 7, 2026",
    readTime: "13 min read",
    category: "Database Design",
    cover: "/assets/photos/heart-failure-erd.png",
    alt: "Entity relationship diagram for the normalized heart failure prediction database.",
    excerpt:
      "This post follows my real database design process: requirement analysis, entity identification, ER thinking, relational schema creation, and normalization.",
    note:
      "Designing the database forced me to move from knowing SQL commands to thinking like a system designer.",
    themes: ["ER design", "Schema", "MySQL Workbench"],
    sections: [
      ["Requirement Analysis", [
        "Designing the actual database began with requirement analysis. I had to understand what the heart failure prediction dataset contained and what the project needed from it. The dataset had 12 main attributes, including Age, Sex, ChestPainType, RestingBP, Cholesterol, FastingBS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope, and HeartDisease. The target variable was HeartDisease, showing whether heart disease was present or absent.",
        "At this stage, I did not want to jump directly into table creation. The first responsibility was to understand the meaning of the data. Which attributes described the patient? Which described clinical condition? Which belonged to ECG-related results? Which represented final diagnosis or risk? These questions helped me separate the dataset into logical groups instead of blindly placing everything into one table.",
        "This approach was influenced by the way Dr. Bilal Ahmad connected Database Systems with practical AI and ML work. He often trained us to think about the value of the problem and the reliability of the data before focusing on tools. In this project, that meant the database design had to respect the medical meaning of the dataset.",
      ]],
      ["Entity Identification", [
        "After requirement analysis, I identified the main entity as Patient. Each row in the dataset represented one patient, so Patient became the center of the design. From there, I identified additional entities: Clinical Details, ECG Details, Diagnosis, and Risk Assessment. These entities helped me organize the features according to their role in the project.",
        "The Clinical Details table included values such as resting blood pressure, cholesterol, fasting blood sugar, maximum heart rate, and oldpeak. The ECG Details table included chest pain type, resting ECG, exercise angina, and ST slope. The Diagnosis table stored the heart disease result. The Risk Assessment table stored extra features such as RiskScore and RiskLevel, which I created during the database design process.",
        "Adding features like AgeGroup, BP_Category, Cholesterol_Category, MaxHR_Category, RiskScore, and RiskLevel made the database more useful for analysis. These features were not added randomly. They were based on health-related logic and helped convert raw numerical values into more interpretable categories.",
      ]],
      ["ER Diagram and Relational Schema", [
        "Once the entities were identified, I moved toward the relational schema. PatientID became the key that connected all tables. Patient served as the central table, while Clinical Details, ECG Details, Diagnosis, and Risk Assessment referenced PatientID as a foreign key. This design made the system organized and reduced confusion.",
        "The ER diagram helped me visually confirm the design. I used MySQL Workbench reverse engineering to generate the ER diagram after creating the tables. This step was important because it allowed me to see whether the structure I had imagined was actually represented correctly. The diagram showed the central role of Patient and the relationships extending from it.",
        "For me, the ER diagram was not just a formal deliverable. It was a way to check my own thinking. When I saw the tables connected visually, I understood the project as a system rather than a collection of SQL statements. That made the database design feel complete.",
      ]],
      ["Normalization as a Design Discipline", [
        "Normalization was one of the most important parts of this stage. I first created an unnormalized table to hold the raw dataset. This helped me preserve the original structure before dividing it. Then I moved through 1NF, 2NF, and 3NF to reduce redundancy and improve data integrity.",
        "In 1NF, every attribute had atomic values. In 2NF, the tables were checked so that non-key attributes depended fully on the primary key. In 3NF, unnecessary dependency between non-key attributes was reduced. These steps made the database more professional and easier to maintain.",
        "By the end of this stage, I felt that I had moved from basic SQL practice to real database design. MySQL Workbench gave me the implementation environment, but the main learning was in the decisions. I learned that good design is not about creating many tables; it is about creating the right tables for the right reasons. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 5,
    title: "Project Discussions: What I Built, Why It Mattered, and How I Planned It",
    slug: "project-discussions-heart-failure-system",
    date: "June 9, 2026",
    readTime: "12 min read",
    category: "Project Planning",
    cover: "/assets/photos/database-systems-exhibition.jpeg",
    alt: "Muhammad Ali Nazir presenting beside the Database Systems Exhibition banner.",
    excerpt:
      "A first-person discussion of the project problem statement, objectives, solution design, implementation strategy, and expected outcomes.",
    note:
      "The project became meaningful when I could explain the what, why, and how behind the technical work.",
    themes: ["Problem statement", "Objectives", "Implementation"],
    sections: [
      ["Problem Statement", [
        "The problem behind my project was to build a system that could predict the presence of heart disease using patient health parameters. The project combined database design and machine learning, which made it more complete than a simple coding exercise. It started from a real-world dataset, moved into database structure, and then continued toward model training and prediction.",
        "The heart failure prediction topic was important because it connected computer engineering with a medical problem. Even though my system was academic and not a clinical tool, the direction was meaningful. It showed how data can support decision-making when handled responsibly. This is the kind of real-world connection that Dr. Bilal Ahmad often encouraged in our coursework, especially because he has strong expertise in AI, ML, and DL model training.",
        "My selected dataset came from Kaggle, specifically the heart failure prediction dataset. I chose it after checking documentation, structure, and relevance. The dataset contained patient features and a target variable, making it suitable for classification. This gave the project a clear technical direction: prepare the data, design the database, train a model, and test predictions.",
      ]],
      ["Project Objectives", [
        "The first objective was to identify and select an authentic real-world heart failure dataset from a credible source. The second objective was to analyze the dataset structure and understand the meaning of each feature. The third objective was to design a normalized relational database using MySQL Workbench with proper entity identification, table creation, and data insertion.",
        "Another objective was to generate an ER diagram through reverse engineering and export the data into CSV format for use in Python. This step created a bridge between database management and machine learning. After that, the project objective shifted toward building a complete ML pipeline, including preprocessing, visualization, encoding, train-test split, model training, prediction, and evaluation.",
        "The final objective was to save the trained model and use it for real-time prediction through an inference script. In my future extension, this same idea can be taken toward FastAPI deployment, where prediction endpoints would allow a user interface or another application to send patient input and receive a result.",
      ]],
      ["Solution Design", [
        "The solution design had two main sides. The first side was the database system. I created the database in MySQL Workbench, designed an unnormalized table, added meaningful extra features, divided the data into related tables, inserted records, and applied normalization. This created a clean structure for the heart failure dataset.",
        "The second side was the machine learning system. After exporting the data into CSV format, I used Python libraries such as Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, and Joblib. Pandas helped with data loading and table handling. Matplotlib and Seaborn helped with visualization. Scikit-learn helped with preprocessing, train-test split, model training, and evaluation. Joblib helped save the model for later use.",
        "This design made the project feel like a pipeline. The database side organized the data, and the ML side learned from it. That pipeline thinking is important because real-world systems rarely depend on one tool only. They depend on the connection between tools.",
      ]],
      ["Implementation Strategy and Expected Outcomes", [
        "My implementation strategy was step-by-step. First, I selected and studied the dataset. Then I designed the database and implemented it in MySQL Workbench. After that, I exported the processed data and moved into Python for machine learning. I performed visualization, checked missing values, encoded categorical features, split the dataset, trained models, evaluated performance, and saved the best trained model.",
        "The expected outcome was a working heart failure prediction system that could take patient information and predict whether heart disease was likely. The inference script completed that practical demonstration by loading the saved model, taking user input, and printing a result such as Heart Disease: YES or Heart Disease: NO.",
        "This project discussion helped me understand that every good technical project needs a clear story. What is the problem? Why does it matter? How will it be solved? What should the output prove? Presenting this work during the Database Systems Exhibition made that story more real for me because I had to stand beside the project and explain the effort behind it. Writing this blog is also part of that story because it leaves a digital footprint of my learning process as a computer engineering student. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 6,
    title: "Real-World Dataset Selection and the Challenges I Faced",
    slug: "real-world-dataset-selection-challenges",
    date: "June 11, 2026",
    readTime: "12 min read",
    category: "Dataset Selection",
    cover: "/assets/project-report/heart-failure-project-10.jpeg",
    alt: "Screenshot showing dataset and analysis work from the heart failure project.",
    excerpt:
      "A reflection on finding a reliable Kaggle dataset, checking authenticity, assessing quality, and understanding ethical responsibility in medical data.",
    note:
      "Dataset selection taught me that every machine learning project begins with trust, not code.",
    themes: ["Kaggle", "Data quality", "Ethics"],
    sections: [
      ["Finding a Reliable Dataset", [
        "Dataset selection was one of the most important stages of my project. At first, I thought finding a dataset would be easy because the internet has so many open datasets. But after searching, I realized that availability is not the same as reliability. Many datasets are uploaded without clear documentation, without proper source information, or without enough explanation of the features. That makes them risky for a serious academic project.",
        "For the heart failure prediction system, I selected a dataset from Kaggle because Kaggle is widely used by data scientists, researchers, and machine learning practitioners. The dataset I selected had a clear structure and was relevant to my project objectives. It also had engagement from users, which helped me evaluate whether others had found it useful.",
        "The official dataset link was https://www.kaggle.com/datasets/fedesoriano/heart-failure-prediction/data. I treated this link as an important source because a portfolio project should be traceable. If someone reads my blog or project report, they should be able to see where the data came from.",
      ]],
      ["Verifying Authenticity", [
        "Verifying dataset authenticity took more effort than I expected. Some datasets looked useful at first, but they lacked background information. Others had features that seemed too neat, which made me question whether they were artificially generated. For a machine learning project, especially a medical one, artificial or unclear data can produce misleading learning.",
        "Dr. Bilal Ahmad often emphasizes the importance of valuable real-world problems in AI and ML. His direction helped me understand why medical datasets need extra care. They are usually collected with precision and accuracy because they connect to real conditions. That does not mean every medical dataset is automatically perfect, but it does mean we should treat source quality as part of the project, not as a side issue.",
        "This stage taught me patience. I had to compare multiple options before finalizing one. The selected dataset had 12 attributes and a clear target variable, which made it suitable for both database design and classification. That combination was exactly what I needed for the Database Systems project.",
      ]],
      ["Assessing Data Quality", [
        "After selecting the dataset, I analyzed the features carefully. Age represented the patient age. Sex represented gender. ChestPainType described the type of chest pain. RestingBP gave resting blood pressure. Cholesterol showed serum cholesterol. FastingBS indicated fasting blood sugar. RestingECG represented electrocardiogram results. MaxHR showed maximum heart rate. ExerciseAngina showed whether chest pain occurred during physical activity. Oldpeak represented ST depression. ST_Slope described the exercise ST segment slope. HeartDisease was the target variable.",
        "Understanding these features helped me decide how they could fit into the database. It also helped later during ML preprocessing, because categorical features such as Sex, ChestPainType, RestingECG, ExerciseAngina, and ST_Slope needed encoding. Without feature understanding, preprocessing becomes mechanical and weak.",
        "Data quality also meant checking missing values and structure. In my ML phase, I found that there were no missing values in the dataset, which made preprocessing easier. Still, the checking step was necessary because a model should not be trained blindly.",
      ]],
      ["Handling Challenges and Ethics", [
        "The biggest challenge was not downloading the dataset; it was deciding whether I could trust it enough for the project. I learned that a good dataset should have documentation, useful features, a clear target, and relevance to the problem. It should also be suitable for the tools I plan to use, such as MySQL for database work and Python for machine learning.",
        "Ethical thinking also became part of the process. Even though the dataset was public, the topic involved patient health. That made me think about privacy, responsible use, and the limits of prediction. A student project can demonstrate learning, but real medical decision-making requires expert validation and strict standards.",
        "This dataset selection stage shaped the whole project. If I had chosen weak data, the database and model would both become weak. Instead, by taking time to select and understand the dataset, I built a stronger foundation for the complete journey. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 7,
    title: "Designing a Database for the Selected Heart Failure Dataset",
    slug: "database-for-selected-heart-failure-dataset",
    date: "June 13, 2026",
    readTime: "13 min read",
    category: "Implementation",
    cover: "/assets/project-report/heart-failure-project-12.jpeg",
    alt: "Screenshot of database implementation tables from the heart failure project report.",
    excerpt:
      "How I moved from dataset structure to entities, ER diagram, relational schema, data loading, validation, and export for ML.",
    note:
      "This was the bridge between raw data and machine learning, and MySQL Workbench became the place where the project gained structure.",
    themes: ["Data loading", "Validation", "CSV export"],
    sections: [
      ["Understanding the Dataset Structure", [
        "Once the dataset was selected, the next major task was designing the database around it. I began by studying the structure of the heart failure data. Every row represented a patient, and every column represented either a patient attribute, a clinical measurement, an ECG-related feature, or the target diagnosis. This understanding helped me avoid treating the dataset as one flat object.",
        "The project started with an unnormalized table because I needed a place to load the raw data exactly as it appeared. This table helped me preserve the original dataset while I planned the normalized design. It also gave me a clear reference point before creating multiple tables.",
        "At this stage, I added useful categories such as AgeGroup, BP_Category, Cholesterol_Category, MaxHR_Category, RiskScore, and RiskLevel. These extra features made the data more interpretable. For example, blood pressure could be categorized as normal, elevated, or high. Cholesterol and maximum heart rate could also be grouped. These additions prepared the data for better analysis.",
      ]],
      ["Identifying Entities and Relationships", [
        "The Patient entity was central to the design. It held PatientID, Age, Sex, and AgeGroup. From there, I created Clinical Details for blood pressure, cholesterol, fasting blood sugar, maximum heart rate, oldpeak, and related categories. ECG Details held chest pain type, resting ECG, exercise angina, and ST slope. Diagnosis held HeartDisease. Risk Assessment held RiskScore and RiskLevel.",
        "The relationship between these tables depended on PatientID. Each related table referenced PatientID as a foreign key. This preserved the connection between the patient and their clinical, ECG, diagnosis, and risk records. It also reduced redundancy because the same patient identity did not need to be repeated with every detail in one large table.",
        "This part of the project made me respect entity identification. A weak entity design would make the whole database confusing. A clear entity design made the later ER diagram and schema easier to understand.",
      ]],
      ["Creating the ER Diagram and Relational Schema", [
        "After table creation, I used MySQL Workbench reverse engineering to generate the ER diagram. The ER diagram showed the Patient table at the center and the related tables connected through PatientID. This visual confirmation was important because it proved that the relational schema was not only written in SQL but also understandable as a system.",
        "The relational schema included table names, primary keys, foreign keys, and data types. PatientID was the primary key in the Patient table. Other tables had their own IDs, such as ClinicalID, ECGID, DiagnosisID, and RiskID, while still referencing PatientID. This design made the database both organized and extensible.",
        "I also implemented normalization tables for 1NF, 2NF, and 3NF. This demonstrated the process of moving from raw structure to clean relational design. It also helped me understand why normalization is considered the main purpose of learning relational database design in the course.",
      ]],
      ["Data Loading, Validation, and Export", [
        "After designing the schema, I inserted data from the main table into the normalized tables using SQL queries. This required care because each table needed the correct subset of attributes. I then checked the results in MySQL Workbench to make sure the records were properly created.",
        "Validation was not only about whether the queries ran successfully. It was also about whether the structure made sense. I checked that tables existed, records were inserted, and relationships were preserved. The implementation screenshots in my report showed the created tables, unnormalized tables, and normalized tables, which proved the database design work.",
        "Finally, I exported the data into CSV format using the MySQL Workbench Result Grid export feature. This step was important because it connected the database phase to the machine learning phase. The exported dataset became the input for Python preprocessing and model training. In this way, database design became the foundation for the rest of the project. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 8,
    title: "Training an ML Model for Real-World Use: My Heart Disease Prediction Workflow",
    slug: "training-ml-model-real-world-heart-disease",
    date: "June 15, 2026",
    readTime: "13 min read",
    category: "Machine Learning",
    cover: "/assets/project-report/heart-failure-project-14.png",
    alt: "Screenshot of machine learning code or output from the project report.",
    excerpt:
      "A first-hand account of preparing data, visualizing patterns, encoding features, training models, evaluating results, and saving the best model.",
    note:
      "Machine learning became clearer when I saw it as a workflow, not a single command that magically predicts.",
    themes: ["EDA", "Random Forest", "Evaluation"],
    sections: [
      ["Setting Up the ML Environment", [
        "The machine learning phase began after the database work was complete and the data was exported into CSV format. I created a Python virtual environment to keep the project dependencies separate. This felt like a small step at first, but it taught me professional project discipline. A virtual environment prevents library conflicts and makes the project easier to manage.",
        "After activating the environment, I imported the required libraries. Pandas helped me load and manage the dataset in DataFrame form. NumPy supported numerical operations. Matplotlib and Seaborn helped with data visualization. Scikit-learn provided preprocessing, train-test split, model training, and evaluation tools. Joblib allowed me to save the trained model.",
        "This stage connected with what Dr. Bilal Ahmad encourages in AI and ML learning: build the whole pipeline, not just one exciting part. A model is only one stage. The environment, data loading, preprocessing, visualization, evaluation, and saving process all matter if the project is going to be useful.",
      ]],
      ["Data Preparation and EDA", [
        "I loaded the CSV file using Pandas and checked the first few rows with head. I also used info to understand data types and missing values. This was important because machine learning models depend on structured input. If the data is loaded incorrectly, everything after that becomes unreliable.",
        "Then I performed exploratory data analysis. I visualized the age distribution to understand which patient age groups were represented in the dataset. I also visualized the distribution of patients with and without heart disease. These plots helped me see patterns before training the model.",
        "EDA made the dataset more familiar. Instead of treating the data as a black box, I started recognizing its behavior. I could see how patient features were distributed and how the target variable appeared. That understanding gave more confidence before training the model.",
      ]],
      ["Feature Engineering and Encoding", [
        "The dataset contained categorical features such as Sex, ChestPainType, RestingECG, ExerciseAngina, and ST_Slope. Since machine learning models cannot directly process text categories, I used Label Encoding to convert them into numerical form. This step was necessary for training.",
        "I also checked missing values and found that the dataset did not contain missing entries requiring treatment. Still, the checking process was important. In real projects, missing values can affect model performance and must be handled carefully through removal, filling, or domain-specific decisions.",
        "Feature engineering had already started during the database phase when I created categories and risk-related fields. This showed me that machine learning preparation does not begin only in Python. It begins earlier, when data is understood and structured properly.",
      ]],
      ["Model Training, Evaluation, and Saving", [
        "After preprocessing, I split the dataset into training and testing sets. The training data allowed the model to learn patterns, while the test data helped evaluate performance on unseen examples. This step is important because a model that performs well only on training data may not generalize.",
        "I trained machine learning models and found that the Random Forest model performed best among the tested models. The model learned relationships between patient features and the HeartDisease target variable. After training, I used predictions on the test set and evaluated the results with a confusion matrix. The confusion matrix helped me compare actual and predicted values and understand correct and incorrect predictions.",
        "Finally, I saved the trained model using Joblib so it could be reused without retraining. This was a satisfying moment because the project moved from experimentation toward practical use. A saved model can be loaded later in an inference script or deployed through an API. That made the work feel closer to a real system. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 9,
    title: "Deploying the Model Using FastAPI: Turning Predictions into a Usable Service",
    slug: "deploying-model-using-fastapi-heart-disease",
    date: "June 17, 2026",
    readTime: "12 min read",
    category: "Deployment",
    cover: "/assets/photos/heart-failure-gui.png",
    alt: "Graphical user interface for the Heart Failure Prediction System.",
    excerpt:
      "How the saved model and inference script point toward FastAPI deployment, prediction endpoints, database integration, and monitoring.",
    note:
      "Deployment is where a model stops being only a file and starts becoming a service that other software can use.",
    themes: ["FastAPI", "Inference", "Endpoints"],
    sections: [
      ["Why FastAPI Fits the Next Stage", [
        "After training and saving the model, the next natural step is deployment. In my current project report, I implemented an inference script that loads the trained model, takes user input, and predicts whether heart disease is likely. That script proves that the saved model can work on unseen data. FastAPI would be the next upgrade because it can turn that prediction logic into a web service.",
        "FastAPI is useful because it allows Python functions to become API endpoints. Instead of running the script manually every time, a frontend, mobile app, or another backend service could send patient input to an endpoint and receive a prediction. This would make the project more practical and closer to real-world software.",
        "This deployment thinking also connects with the broader learning direction encouraged by Dr. Bilal Ahmad. Database Systems gave structure to the data, machine learning gave prediction ability, and deployment would make the model accessible. A full project should not stop at training if the goal is real usability.",
      ]],
      ["Integrating the Trained Model", [
        "The first deployment step would be loading the saved Random Forest model inside a FastAPI application. Since I saved the trained model using Joblib, the API can load it when the app starts. The same preprocessing logic used during training should also be applied during prediction so that input values match the format the model expects.",
        "This is important because a model cannot understand raw text categories unless they are encoded in the same way as training. For example, Sex, ChestPainType, RestingECG, ExerciseAngina, and ST_Slope need consistent encoding. If deployment ignores preprocessing, the prediction endpoint may produce incorrect results even if the model itself was trained properly.",
        "A well-designed API would define a request body containing patient features such as age, sex, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, ECG result, maximum heart rate, exercise angina, oldpeak, and ST slope. The endpoint would validate the input, transform it, pass it to the model, and return the prediction.",
      ]],
      ["Prediction Endpoints and Database Integration", [
        "The main FastAPI endpoint could be named something like predict. It would accept patient data and return a response such as Heart Disease: YES or Heart Disease: NO, similar to my inference script. A better response could also include a risk level or probability if the model supports it. This would make the output more informative.",
        "Database integration would make the deployment stronger. The API could connect to the MySQL database to store prediction requests, retrieve patient records, or log model outputs. This would complete the loop between database design and machine learning deployment. The project would no longer be separated into isolated parts; it would become one system.",
        "Monitoring would also matter in a real deployment. The system should record prediction activity, watch for errors, and track whether incoming data looks different from the training data. Even though this is beyond the current academic report, thinking about it helps me understand how real ML systems are maintained.",
      ]],
      ["From Inference Script to Production Thinking", [
        "My current inference script already demonstrates the core idea. It imports the necessary libraries, loads the trained model, takes user input, processes the values, and returns a prediction. This is the seed of deployment. FastAPI would simply wrap that logic in a form that other software can call.",
        "This step helped me understand the difference between a model and a product. A model file is useful to the developer, but an API is useful to a system. A deployed endpoint allows prediction to become part of a larger workflow. That is why deployment is such an important stage in the Database to ML journey.",
        "For my portfolio, this blog shows future readiness. Even if the current implementation is based on an inference script, I now understand how it can be upgraded into FastAPI deployment. That understanding matters because it shows the complete path from data selection to database design, machine learning, and practical service delivery. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
  {
    number: 10,
    title: "Complete Journey: From Data to Production in My Heart Failure Prediction System",
    slug: "complete-journey-data-to-production-heart-failure",
    date: "June 19, 2026",
    readTime: "13 min read",
    category: "Journey Summary",
    cover: "/assets/photos/heart-failure-gui.png",
    alt: "Heart Failure Prediction System interface for entering patient clinical data.",
    excerpt:
      "A complete semester reflection on dataset validation, database implementation, machine learning development, inference, deployment thinking, and lessons learned.",
    note:
      "This project taught me that a complete system is built through connected stages, not isolated assignments.",
    themes: ["End-to-end pipeline", "Lessons learned", "Future work"],
    sections: [
      ["Dataset Selection and Validation", [
        "The complete journey of my heart failure prediction system began with dataset selection. I searched for a dataset that was authentic, structured, and connected to a real-world problem. After comparing options, I selected the Kaggle heart failure prediction dataset because it had clear features, a target variable, and relevance to both database design and machine learning.",
        "This first stage taught me that a project is only as strong as its data. If the dataset is unreliable, then the database, model, and deployment all inherit that weakness. That is why I checked the dataset source, structure, documentation, and feature meaning before moving forward. The selected dataset gave me 12 attributes that could support a meaningful prediction workflow.",
        "The topic also matched the type of work Dr. Bilal Ahmad encourages: using AI and ML for problems that have real-world value. His guidance in Database Systems and Programming Fundamentals helped me see that technical learning becomes stronger when it is connected to meaningful data.",
      ]],
      ["Database Design and Implementation", [
        "After selecting the dataset, I moved into database design. I created an unnormalized table first, then identified entities and designed a normalized relational database. The main entities were Patient, Clinical Details, ECG Details, Diagnosis, and Risk Assessment. PatientID connected the tables and preserved the relationships between records.",
        "I used MySQL Workbench to create the database, define tables, insert records, apply normalization, and generate an ER diagram through reverse engineering. This helped me visualize the system and confirm that the relational schema was properly organized. The database phase taught me the importance of structure before analysis.",
        "Normalization into 1NF, 2NF, and 3NF reduced redundancy and improved data integrity. This made the project more professional and easier to maintain. It also prepared the data for the machine learning phase by making the structure cleaner and more trustworthy.",
      ]],
      ["Machine Learning Development", [
        "The machine learning phase began after exporting the data into CSV format. I created a Python virtual environment, imported libraries, loaded the dataset with Pandas, performed visualization, checked missing values, encoded categorical features, and split the data into training and testing sets.",
        "I trained models and found that Random Forest performed best among the tested options. I evaluated the model using predictions and a confusion matrix, which helped me understand correct and incorrect classifications. This phase taught me that model training is not just about running an algorithm. It requires preparation, testing, interpretation, and saving the result for later use.",
        "I saved the trained model using Joblib and then created an inference script. The script loaded the model, accepted user input, and predicted whether heart disease was present or absent. This made the project feel practical because it moved beyond training and showed how the model could be used on unseen data.",
      ]],
      ["Deployment Thinking and Future Improvements", [
        "The final direction of the project is deployment. FastAPI can be used to turn the saved model and inference logic into prediction endpoints. A user or another system could submit patient features and receive a result. With database integration, the API could also store prediction logs or retrieve patient records from MySQL.",
        "Future improvements could include better preprocessing pipelines, stronger validation, probability outputs, a frontend interface, API documentation, and monitoring. If the system were ever used in a serious medical context, it would require expert review, privacy protection, and clinical validation. As a student project, its value is in learning the end-to-end engineering pipeline.",
        "This portfolio blog series is also part of the project outcome. It leaves a digital footprint of my semester journey and shows how I moved from database concepts to ML implementation and deployment thinking. For readers who want to know more about my professor's research profile, Dr. Bilal Ahmad's work can be explored through his <a href=\"" + professorLinks.scholar + "\" target=\"_blank\" rel=\"noopener\">Google Scholar profile</a>, and his professional profile is available on <a href=\"" + professorLinks.linkedin + "\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>. This journey has made me more confident that computer engineering is not just about passing courses; it is about learning how systems are built from data to real use. #MLwithDrBilalAhmad #DrBilalAhmad #MLProject",
      ]],
    ],
  },
];

const allPosts = [
  ...legacyPosts,
  ...posts.map((post) => ({
    ...post,
    number: post.number + legacyPosts.length,
  })),
];

function html(strings, ...values) {
  return strings.reduce((out, part, i) => out + part + (values[i] ?? ""), "");
}

function sectionId(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function professorProfileLink(postNumber) {
  if (postNumber % 3 === 1) {
    return `<a href="${professorLinks.linkedin}" target="_blank" rel="noopener">Dr. Bilal Ahmad on LinkedIn</a>`;
  }
  if (postNumber % 3 === 2) {
    return `<a href="${professorLinks.scholar}" target="_blank" rel="noopener">Dr. Bilal Ahmad's Google Scholar profile</a>`;
  }
  return `<a href="${professorLinks.facebook}" target="_blank" rel="noopener">Dr. Bilal Ahmad's Facebook page</a>`;
}

function renderPortfolioReflection(post) {
  return html`
            <section class="article-block" id="portfolio-reflection">
              <h2>Portfolio Reflection and Digital Footprint</h2>
              <p>One reason I am writing this post in detail is that a portfolio should show more than final screenshots. It should show the thinking process behind a student project. When someone visits my GitHub portfolio, I want them to see how I moved from a rough idea to a structured technical journey. This is also why the blog format is useful. It lets me explain the choices, the confusion, the corrections, and the small moments where a concept finally started making sense.</p>
              <p>Dr. Bilal Ahmad suggested this practice as part of our growth as computer engineering students, and I now understand the advantage more clearly. A digital footprint can help future teachers, classmates, recruiters, and even my own future self see evidence of learning. It is easy to say that I studied Database Systems or worked on machine learning, but it is stronger to document the actual steps, tools, and lessons. That record makes the learning visible.</p>
              <p>I also tried to keep this writing connected with my real semester experience instead of making it sound like a general internet article. The full portfolio gives me a meaningful base because it joins personal adjustment, Programming Fundamentals, Database Systems, machine learning, and project thinking. Readers can also explore ${professorProfileLink(post.number)} to understand the academic and professional background behind the guidance that shaped this work.</p>
            </section>`;
}

function renderArticle(post) {
  const toc = post.sections
    .map(([title]) => `<a href="#${sectionId(title)}">${title}</a>`)
    .concat('<a href="#portfolio-reflection">Portfolio Reflection</a>')
    .join("\n                ");
  const body = post.sections
    .map(([title, paragraphs], index) => {
      const figure =
        index === 1
          ? html`
              <figure class="article-figure">
                <img src="${post.cover}" alt="${post.alt}" />
                <figcaption>${post.note}</figcaption>
              </figure>`
          : "";
      return html`
            <section class="article-block" id="${sectionId(title)}">
              <h2>${title}</h2>
              ${figure}
              ${paragraphs
                .map((p, pIndex) => `<p${index === 0 && pIndex === 0 ? ' class="lead"' : ""}>${p}</p>`)
                .join("\n              ")}
            </section>`;
    })
    .join("\n");

  return html`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${post.title} | Ali Nazir</title>
    <meta name="description" content="${post.excerpt}" />
    <meta name="theme-color" content="#102f4d" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/styles.css?v=20260624-1" />
    <script src="/main.js?v=20260624-1" defer></script>
  </head>
  <body class="article-page" data-base="." data-nav-current="blog">
    <div class="reading-progress"><span data-reading-progress></span></div>
    <div class="site-shell">
      <header class="site-header">
        <a class="brand" href="/" aria-label="Muhammad Ali Nazir Home">
          <span class="brand-mark"><img src="/assets/profile-avatar.jpg" alt="Portrait of Muhammad Ali Nazir" /></span>
          <span class="brand-copy"><strong>Ali Nazir</strong><small>Engineering Journal</small></span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation" data-menu-button><span></span><span></span></button>
        <nav class="site-nav" data-nav-links>
          <a href="/" data-nav-key="home">Home</a>
          <a href="/blog/" data-nav-key="blog">Blog</a>
          <a href="/about/" data-nav-key="about">About</a>
          <a href="/contact/" data-nav-key="contact">Contact</a>
        </nav>
      </header>
      <main class="article-main">
        <section class="article-hero" data-reveal>
          <div class="article-intro">
            <a class="back-link" href="/blog/">Back to Blog</a>
            <p class="eyebrow">Blog ${post.number}</p>
            <h1>${post.title}</h1>
            <p class="article-summary">${post.excerpt}</p>
            <div class="article-meta">
              <span>${post.date}</span>
              <span>${post.readTime}</span>
              <span>${post.category}</span>
            </div>
          </div>
          <div class="article-cover-stack">
            <img class="article-cover-image" src="${post.cover}" alt="${post.alt}" />
            <div class="article-cover-note">
              <span class="card-kicker">Core Message</span>
              <p>${post.note}</p>
            </div>
          </div>
        </section>
        <section class="article-layout">
          <aside class="article-side" data-reveal>
            <div class="side-card">
              <span class="card-kicker">On This Page</span>
              <nav class="article-toc">
                ${toc}
              </nav>
            </div>
            <div class="side-card">
              <span class="card-kicker">Core Themes</span>
              <div class="tag-cloud">${post.themes.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
            </div>
          </aside>
          <article class="article-content" data-reveal>
${body}
${renderPortfolioReflection(post)}
            <section class="article-block closing-card" id="closing-thought">
              <span class="card-kicker">Closing Thought</span>
              <h2>This post is one part of my engineering portfolio journey.</h2>
              <p>Writing it helped me convert coursework into a visible record of learning, reflection, and technical growth.</p>
              <a class="button button-primary" href="/blog/">Return to Blog</a>
            </section>
          </article>
        </section>
      </main>
      <footer class="site-footer"><p><span data-current-year></span> Muhammad Ali Nazir. Database, machine learning, and engineering growth.</p></footer>
    </div>
  </body>
</html>
`;
}

function renderPostObject(post) {
  return `  {
    number: ${post.number},
    title: ${JSON.stringify(post.title)},
    href: ${JSON.stringify(`/posts/${post.slug}/`)},
    label: ${JSON.stringify(`Blog ${post.number}`)},
    dateLabel: ${JSON.stringify(post.date)},
    readTime: ${JSON.stringify(post.readTime)},
    excerpt: ${JSON.stringify(post.excerpt)},
    highlights: ${JSON.stringify(post.themes)},
    tags: ${JSON.stringify(post.tags || [post.category, "Heart Failure Project", "MLProject"])},
    cover: ${JSON.stringify(post.cover)},
    coverAlt: ${JSON.stringify(post.alt)},
  }`;
}

function updateMainJs() {
  const mainPath = path.join(root, "main.js");
  let text = fs.readFileSync(mainPath, "utf8");
  const start = text.indexOf("const posts = [");
  const end = text.indexOf("];", start) + 2;
  const replacement = `const posts = [\n${allPosts.map(renderPostObject).join(",\n")}\n];`;
  text = text.slice(0, start) + replacement + text.slice(end);
  fs.writeFileSync(mainPath, text);
}

function updateBlogPage() {
  const blogPath = path.join(root, "blog", "index.html");
  let text = fs.readFileSync(blogPath, "utf8");
  text = text.replace(
    "A minimal blog list by Muhammad Ali Nazir, showing numbered posts in ascending order that open into full reading pages.",
    "A Database to Machine Learning portfolio blog by Muhammad Ali Nazir, documenting a heart failure prediction system from dataset selection to deployment thinking."
  );
  text = text.replace("Study Life &middot; Projects &middot; Reflection", "Database &middot; ML &middot; Deployment");
  text = text.replace("Moments, milestones, and lessons from my journey.", "From database design to machine learning deployment.");
  text = text.replace(
    "A personal collection of reflections on growth, discipline,\n              programming, and the experiences shaping my path in engineering.",
    "A connected 15-post portfolio series: first my student journey and Programming Fundamentals growth, then my Heart Failure Prediction System from dataset selection to database design, machine learning, inference, and FastAPI deployment planning."
  );
  text = text.replace("<span>Reflections</span>\n              <span>Projects</span>\n              <span>Growth</span>", "<span>Database Systems</span>\n              <span>Machine Learning</span>\n              <span>FastAPI</span>");
  text = text.replace("Personal writing,\n          one blog at a time.", "Database Systems, Machine Learning, and deployment learning.");
  fs.writeFileSync(blogPath, text);
}

function updateHomePage() {
  const homePath = path.join(root, "index.html");
  let text = fs.readFileSync(homePath, "utf8");
  text = text.replace(
    "I study computer engineering at the University of Engineering\n                and Technology Lahore, Faisalabad Campus.",
    "I study computer engineering at the University of Engineering\n                and Technology Lahore, Faisalabad Campus, and I document my\n                Database to Machine Learning project journey here."
  );
  text = text.replace(
    "I am drawn to disciplined growth, thoughtful work, and the kind\n                of learning that slowly turns ambition into something real and\n                lasting.",
    "My current portfolio follows a Heart Failure Prediction System\n                built through MySQL database design, Python machine learning,\n                and FastAPI deployment planning."
  );
  text = text.replace("<span>Computer Engineering</span>\n                <span>UET Lahore</span>\n                <span>Faisalabad Campus</span>", "<span>Computer Engineering</span>\n                <span>Database Systems</span>\n                <span>Machine Learning</span>");
  text = text.replace("Read Journal", "Read Blog Series");
  text = text.replace(
    "Building a future in engineering with clarity.",
    "Building a technical portfolio through real coursework."
  );
  text = text.replace(
    "A student focused on calm ambition, steady improvement, and a\n                  meaningful life shaped through engineering.",
    "A student portfolio focused on database design, machine learning,\n                  and practical project documentation."
  );
  fs.writeFileSync(homePath, text);
}

function writeArticles() {
  for (const post of allPosts) {
    const dir = path.join(root, "posts", post.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), renderArticle(post));
  }
}

writeArticles();
updateMainJs();
updateBlogPage();
updateHomePage();

console.log(`Generated ${allPosts.length} portfolio blog posts.`);
