export const frameworks = [
  {
    id: "itil",
    name: "ITIL 4",
    subtitle: "IT Service Management",
    icon: "🖥️",
    color: "#2563EB",
    bg: "#EFF6FF",
    description: "Master IT service management through real incident, change, and problem scenarios",
    totalScenarios: 5,
    category: "Technology"
  },
  {
    id: "pmp",
    name: "PMP",
    subtitle: "Project Management",
    icon: "📊",
    color: "#7C3AED",
    bg: "#F5F3FF",
    description: "Navigate real project crises, stakeholder conflicts, and delivery challenges",
    totalScenarios: 5,
    category: "Management"
  },
  {
    id: "sixsigma",
    name: "Six Sigma",
    subtitle: "Quality & Operations",
    icon: "⚙️",
    color: "#059669",
    bg: "#ECFDF5",
    description: "Solve real quality defects and process failures using DMAIC methodology",
    totalScenarios: 5,
    category: "Operations"
  }
];

export const scenarios = {
  itil: [
    {
      id: "itil-1",
      title: "Hospital System Blackout",
      industry: "Healthcare",
      practice: "Incident Management",
      difficulty: "Foundation",
      duration: "10 min",
      description: "It is 2:47 AM. The on-call phone rings. You are the IT Service Desk Manager at City General Hospital. The night nursing supervisor reports that the Electronic Health Record (EHR) system is completely down across all three ICU floors. Nurses cannot access patient medication records, lab results, or care plans. There are currently 47 critically ill patients in the ICUs.",
      situation: "P1 Critical — Patient safety at risk. EHR system down. 47 ICU patients affected. Hospital CEO has been notified.",
      urgency: "P1",
      steps: [
        {
          question: "The nursing supervisor calls and says the EHR is down. What is your FIRST action?",
          options: [
            { text: "Immediately call the EHR vendor and wait for them to fix it", correct: false, score: 10 },
            { text: "Log the incident, assign P1 priority, and activate the Major Incident process", correct: true, score: 100 },
            { text: "Restart all the servers and hope the system comes back up", correct: false, score: 5 },
            { text: "Send an email to the IT Director and go back to sleep", correct: false, score: 0 }
          ],
          explanation: "In ITIL, the first step is always to LOG the incident and classify it correctly. A P1 immediately triggers the Major Incident Management process, which activates a dedicated team and stakeholder communications. Acting without logging breaks the audit trail and response coordination.",
          practice: "Incident Management — Logging & Classification"
        },
        {
          question: "You have logged the P1. The system is still down. Who do you assemble NEXT?",
          options: [
            { text: "Wait for the vendor to respond to your email before doing anything else", correct: false, score: 10 },
            { text: "Activate the Major Incident Team: IT Manager, Network, Server, Application, and Vendor on a bridge call", correct: true, score: 100 },
            { text: "Ask one junior technician to investigate alone", correct: false, score: 15 },
            { text: "Call only the server team since it must be a server issue", correct: false, score: 20 }
          ],
          explanation: "ITIL Major Incident Management requires assembling a cross-functional team immediately. You do not know the root cause yet so you need all technical towers involved simultaneously. A bridge call ensures parallel investigation and faster resolution.",
          practice: "Incident Management — Major Incident Coordination"
        },
        {
          question: "While the team investigates, the ICU nurses are panicking. What do you do about communication?",
          options: [
            { text: "Stay silent until the system is fixed — no point worrying people more", correct: false, score: 5 },
            { text: "Send one update saying you are working on it and nothing more", correct: false, score: 30 },
            { text: "Activate the downtime procedure, issue regular updates every 30 minutes to clinical staff and leadership, and remind nurses of paper backup procedures", correct: true, score: 100 },
            { text: "Only communicate with the CEO and let them handle the nurses", correct: false, score: 20 }
          ],
          explanation: "ITIL emphasizes stakeholder communication throughout an incident. Regular updates every 30 minutes keep people informed and reduce panic. Activating downtime (paper) procedures ensures patient safety continues while the system is restored.",
          practice: "Incident Management — Communication & Workaround"
        },
        {
          question: "The team finds the cause — a failed database server. It is fixed and the system is back up. What happens now?",
          options: [
            { text: "Close the incident immediately and go to sleep", correct: false, score: 10 },
            { text: "Confirm service restoration with users, document the resolution, formally close the incident, and raise a Problem record for root cause investigation", correct: true, score: 100 },
            { text: "Wait a week before officially closing to make sure it stays up", correct: false, score: 20 },
            { text: "Just make sure the server stays on and do not document anything", correct: false, score: 0 }
          ],
          explanation: "Service restoration must be CONFIRMED with affected users — not assumed. After closure, ITIL requires raising a Problem record to find the root cause and prevent recurrence. Documentation ensures organizational learning.",
          practice: "Incident Management — Resolution & Problem Raising"
        }
      ]
    },
    {
      id: "itil-2",
      title: "Friday Night Deployment Disaster",
      industry: "Banking",
      practice: "Change Enablement",
      difficulty: "Practitioner",
      duration: "12 min",
      description: "It is 6:30 PM on a Friday. Your bank's development team has just deployed a new version of the mobile banking app. Within 20 minutes, the Service Desk starts receiving calls. 40% of customers cannot log in. Customers are angry on social media. The deployment was approved as a Standard Change — but something went wrong.",
      situation: "P1 Critical — 40% of mobile banking customers locked out. Social media storm brewing. Regulators may be notified.",
      urgency: "P1",
      steps: [
        {
          question: "The deployment caused the outage. What is your first priority right now?",
          options: [
            { text: "Fix the new code — keep pushing forward with the deployment", correct: false, score: 10 },
            { text: "Raise a P1 Incident and simultaneously initiate an Emergency Change to roll back to the previous version", correct: true, score: 100 },
            { text: "Wait until Monday when the full team is available", correct: false, score: 0 },
            { text: "Blame the development team publicly", correct: false, score: 0 }
          ],
          explanation: "In ITIL, a failed change that causes an incident requires TWO parallel tracks: Incident Management to restore service, and Emergency Change process to authorize and execute the rollback. Restore service first — investigate second.",
          practice: "Change Enablement — Emergency Change & Rollback"
        },
        {
          question: "To rollback you need emergency approval. The normal CAB (Change Advisory Board) does not meet until Monday. What do you do?",
          options: [
            { text: "Wait until Monday's CAB meeting for proper approval", correct: false, score: 5 },
            { text: "Just rollback without any approval — it is an emergency", correct: false, score: 20 },
            { text: "Invoke the Emergency CAB (ECAB) — contact the Change Authority by phone for immediate emergency approval", correct: true, score: 100 },
            { text: "Ask the junior developer to decide", correct: false, score: 0 }
          ],
          explanation: "ITIL defines an Emergency CAB (ECAB) specifically for situations like this. It is a smaller group who can approve emergency changes quickly. All changes — even emergency rollbacks — must be authorized to maintain governance and audit trails.",
          practice: "Change Enablement — Emergency CAB Authorization"
        },
        {
          question: "Rollback is complete. Service is restored. What must you do with the failed change?",
          options: [
            { text: "Delete all records of the failed deployment — it is embarrassing", correct: false, score: 0 },
            { text: "Document the failed change, conduct a Post Implementation Review (PIR), and raise a Problem record to identify what went wrong in testing", correct: true, score: 100 },
            { text: "Let the development team quietly fix it and redeploy next week", correct: false, score: 15 },
            { text: "Only document it if the regulator asks", correct: false, score: 5 }
          ],
          explanation: "Every failed change in ITIL must have a Post Implementation Review. This feeds into Problem Management to identify why the defect was not caught in testing. Without this, the same failure will repeat.",
          practice: "Change Enablement — PIR & Problem Management"
        }
      ]
    },
    {
      id: "itil-3",
      title: "Black Friday Meltdown",
      industry: "Retail",
      practice: "Capacity Management",
      difficulty: "Practitioner",
      duration: "10 min",
      description: "It is Black Friday at 9:02 AM. Your e-commerce platform was expected to handle 5x normal traffic. Instead, 10x traffic hit within the first 2 minutes of the sale going live. The website is responding in 45 seconds. Customers are abandoning carts. The CEO is watching the revenue dashboard go red in real time.",
      situation: "P1 — Revenue impacting. Website degraded. 10x traffic. CEO watching live.",
      urgency: "P1",
      steps: [
        {
          question: "The site is crawling. What do you do in the first 5 minutes?",
          options: [
            { text: "Shut down the website completely to protect the servers", correct: false, score: 10 },
            { text: "Activate the incident, enable auto-scaling immediately, and implement a virtual queue for customers", correct: true, score: 100 },
            { text: "Send a tweet apologizing and wait for traffic to drop naturally", correct: false, score: 5 },
            { text: "Add more features to distract customers", correct: false, score: 0 }
          ],
          explanation: "ITIL Capacity Management requires predefined scaling procedures for peak events. Auto-scaling restores performance. A virtual queue manages demand without turning customers away. Both are defined workarounds in a good Capacity Plan.",
          practice: "Capacity & Performance Management"
        },
        {
          question: "After Black Friday, the CEO asks why capacity planning failed. What is the honest ITIL answer?",
          options: [
            { text: "It was unpredictable — nothing could have been done", correct: false, score: 10 },
            { text: "The Capacity Plan was based on 5x historical data but did not model the worst-case 10x scenario or test auto-scaling thresholds under real load", correct: true, score: 100 },
            { text: "The developers wrote bad code", correct: false, score: 15 },
            { text: "Black Friday is always chaotic — this is normal", correct: false, score: 5 }
          ],
          explanation: "ITIL Capacity Management requires demand forecasting, capacity modeling, and load testing including worst-case scenarios. A PIR after this incident should update the Capacity Plan with better peak modeling and pre-validated scaling procedures.",
          practice: "Capacity Management — Demand Forecasting & Planning"
        }
      ]
    }
  ],

  pmp: [
    {
      id: "pmp-1",
      title: "The Scope Creep Crisis",
      industry: "Financial Services",
      practice: "Scope Management",
      difficulty: "Foundation",
      duration: "10 min",
      description: "You are the Project Manager for a core banking system upgrade. The project is 6 weeks from go-live. Your lead developer tells you the CFO has personally asked the team to add a real-time fraud detection module — not in the original scope. The team is excited. The CFO assumes it will be ready at launch. Your sponsor does not know yet.",
      situation: "6 weeks to go-live. Unauthorized scope addition requested by CFO. Sponsor unaware. Team already starting work.",
      urgency: "High",
      steps: [
        {
          question: "Your developer tells you the CFO asked them directly to add the fraud module. What do you do first?",
          options: [
            { text: "Let the team build it — the CFO outranks you anyway", correct: false, score: 10 },
            { text: "Immediately stop the unauthorized work, document the request formally, and perform impact analysis on scope, cost, schedule, and risk", correct: true, score: 100 },
            { text: "Add it quietly and hope no one notices the delay", correct: false, score: 5 },
            { text: "Tell the developer to ignore the CFO", correct: false, score: 15 }
          ],
          explanation: "PMP requires all scope changes to go through Integrated Change Control — no matter who requests them. Unauthorized scope work is called scope creep and is the number one cause of project failure. Stop the work, analyze the impact, then present options to the sponsor.",
          practice: "Scope Management — Integrated Change Control"
        },
        {
          question: "Your impact analysis shows adding the fraud module will delay go-live by 4 weeks and cost $80,000 extra. You now need to present this to the Sponsor and CFO together. What do you present?",
          options: [
            { text: "Just say no to the CFO — scope is scope", correct: false, score: 20 },
            { text: "Say yes to keep the CFO happy and figure out the budget later", correct: false, score: 5 },
            { text: "Present three options with full impact analysis: (1) Add module — 4 week delay, $80K extra (2) Add module post-launch as Phase 2 (3) Proceed with original scope and launch on time", correct: true, score: 100 },
            { text: "Escalate to the CEO to resolve the conflict between CFO and Sponsor", correct: false, score: 15 }
          ],
          explanation: "A PMP project manager's job is to present options with clear impacts — not to make the decision for stakeholders. Showing three options respects both the CFO's business need and the sponsor's delivery commitment. This is professional stakeholder management.",
          practice: "Scope & Stakeholder Management — Change Options"
        },
        {
          question: "The sponsor and CFO agree: fraud module goes to Phase 2. But the developer already spent 2 days building it. What do you do?",
          options: [
            { text: "Fire the developer for insubordination", correct: false, score: 0 },
            { text: "Ignore the 2 days of work — it is lost time", correct: false, score: 10 },
            { text: "Document the 2 days as unplanned cost, preserve the developer's work for Phase 2, update the Project Management Plan, and implement a team briefing on change control process", correct: true, score: 100 },
            { text: "Secretly absorb the cost without telling anyone", correct: false, score: 5 }
          ],
          explanation: "PMP requires transparency in cost tracking. The 2 days must be documented as a variance. Preserving the work avoids waste in Phase 2. The team briefing prevents recurrence — a direct developer-to-CFO channel bypassing the PM is a process gap that must be closed.",
          practice: "Scope Management — Lessons Learned & Plan Update"
        }
      ]
    },
    {
      id: "pmp-2",
      title: "The Impossible Deadline",
      industry: "Government",
      practice: "Schedule Management",
      difficulty: "Practitioner",
      duration: "12 min",
      description: "You are PM for a government digital transformation project. The Minister has publicly announced the new citizen portal will launch on National Day — in exactly 90 days. Your team's honest estimate is 140 days. The project sponsor is a Deputy Minister who is politically pressured to deliver on the Minister's promise. Your team is already working 60-hour weeks.",
      situation: "90 day political deadline. Team estimates 140 days. Sponsor under pressure. Team already at capacity.",
      urgency: "High",
      steps: [
        {
          question: "The sponsor tells you to just make it work in 90 days. What is your professional response?",
          options: [
            { text: "Say yes — the customer is always right", correct: false, score: 5 },
            { text: "Refuse to do it and threaten to quit", correct: false, score: 0 },
            { text: "Present a detailed schedule analysis showing the 50-day gap, then offer schedule compression options: fast-tracking, crashing with more resources, or scope reduction to hit 90 days", correct: true, score: 100 },
            { text: "Tell the sponsor to talk to the Minister and reduce the scope yourself", correct: false, score: 15 }
          ],
          explanation: "PMP teaches that a PM must present honest data, not just agree to please stakeholders. Schedule compression techniques — fast tracking (parallel work) and crashing (adding resources) — are legitimate tools. But scope reduction is often the most realistic option. Present all three with costs and risks.",
          practice: "Schedule Management — Compression Techniques"
        },
        {
          question: "The sponsor agrees to reduce scope. You identify 40% of features that can be deferred to Phase 2. But three department heads object to their features being cut. What do you do?",
          options: [
            { text: "Add all features back to keep everyone happy", correct: false, score: 5 },
            { text: "Facilitate a formal scope prioritization workshop with all department heads and the sponsor, using MoSCoW method to agree on Must Have vs Can Wait features for Phase 2", correct: true, score: 100 },
            { text: "Randomly cut features yourself and inform departments after", correct: false, score: 10 },
            { text: "Ask the Minister to decide which departments get cut", correct: false, score: 15 }
          ],
          explanation: "MoSCoW prioritization (Must Have, Should Have, Could Have, Won't Have this time) is a structured way to get stakeholder agreement on scope. A facilitated workshop with the sponsor present gives authority to the decisions and reduces political friction.",
          practice: "Scope & Stakeholder Management — MoSCoW Prioritization"
        },
        {
          question: "90 days in, the portal launches on National Day — but with reduced scope. Citizens notice some features are missing. Media asks questions. How do you handle the narrative?",
          options: [
            { text: "Blame the department heads for not cooperating", correct: false, score: 0 },
            { text: "Say the full system will come in Phase 2 and hide the story of scope reduction", correct: false, score: 10 },
            { text: "The sponsor proactively communicates that Phase 1 is live on time, Phase 2 features are actively in development with a clear timeline, demonstrating responsible delivery management", correct: true, score: 100 },
            { text: "Deny that any features are missing", correct: false, score: 0 }
          ],
          explanation: "PMP emphasizes transparent stakeholder communication. Phased delivery is a legitimate and professional strategy. Proactive communication framing Phase 1 as a success and Phase 2 as planned is far better than reactive damage control.",
          practice: "Communications Management — Stakeholder Transparency"
        }
      ]
    },
    {
      id: "pmp-3",
      title: "The Silent Risk",
      industry: "Construction",
      practice: "Risk Management",
      difficulty: "Foundation",
      duration: "8 min",
      description: "You are PM for a $50M hospital construction project. During a weekly team meeting, your lead engineer mentions almost as an aside that the ground survey showed unusual soil composition in Zone 3. He says he mentioned it to the previous PM 3 months ago but nothing was in the risk register. Construction in Zone 3 starts in 3 weeks.",
      situation: "Unregistered risk identified. Zone 3 construction starts in 3 weeks. Previous PM did not document. $50M project at stake.",
      urgency: "High",
      steps: [
        {
          question: "You just heard about this unregistered risk. What do you do immediately after the meeting?",
          options: [
            { text: "Blame the previous PM in front of the team", correct: false, score: 0 },
            { text: "Register the risk immediately with full details, assign an owner, commission a geotechnical assessment of Zone 3 soil, and alert the sponsor of a potential schedule and cost impact", correct: true, score: 100 },
            { text: "Start construction in Zone 3 and monitor for problems as they arise", correct: false, score: 5 },
            { text: "Stop the entire project until the soil is fully understood", correct: false, score: 25 }
          ],
          explanation: "In PMP, any identified risk must be immediately added to the Risk Register regardless of when it was discovered. The risk owner leads the response. A geotechnical assessment gives you real data to quantify the risk. Alerting the sponsor is mandatory for a risk of this magnitude.",
          practice: "Risk Management — Risk Identification & Registration"
        },
        {
          question: "The geotechnical report confirms the soil requires special foundation work. It will cost $800K extra and delay Zone 3 by 6 weeks. How do you respond?",
          options: [
            { text: "Absorb the cost quietly from contingency without telling anyone", correct: false, score: 10 },
            { text: "Present a formal Risk Response Plan to the sponsor: accept the cost and schedule impact, use contingency reserve, update the project baseline with approved change, and implement the special foundation work", correct: true, score: 100 },
            { text: "Find a cheaper contractor who will skip the special foundation work", correct: false, score: 0 },
            { text: "Tell the client the delay is due to weather", correct: false, score: 0 }
          ],
          explanation: "PMP requires a formal Risk Response Plan for significant risks. Using contingency reserve is exactly what it is there for. However, using contingency for a $800K item requires sponsor approval and a formal baseline change. Transparency protects the PM and the project.",
          practice: "Risk Management — Risk Response Planning"
        }
      ]
    }
  ],

  sixsigma: [
    {
      id: "ss-1",
      title: "The Defective Brake Pads",
      industry: "Automotive Manufacturing",
      practice: "DMAIC — Define & Measure",
      difficulty: "Foundation",
      duration: "12 min",
      description: "You are a Quality Manager at an automotive parts manufacturer. The production line is producing brake pads for a major car brand. Quality inspection has flagged that 15% of brake pads in the last month fail the thickness tolerance test. The car brand has issued a formal complaint and is threatening to move to a competitor. This is a safety-critical component.",
      situation: "15% defect rate on safety-critical brake pads. Customer threatening to leave. Root cause unknown.",
      urgency: "High",
      steps: [
        {
          question: "You need to start a Six Sigma project. What is your FIRST step in DMAIC?",
          options: [
            { text: "Immediately buy new machinery to fix the problem", correct: false, score: 10 },
            { text: "Fire the production line workers who are making defective parts", correct: false, score: 0 },
            { text: "Define the problem precisely: create a Project Charter with problem statement, goal (reduce defects from 15% to below 1%), scope, team, and timeline", correct: true, score: 100 },
            { text: "Start collecting data randomly from the production line", correct: false, score: 20 }
          ],
          explanation: "Six Sigma always starts with Define. A Project Charter formally defines the problem, the goal (measurable), the team, and the boundaries. Without a clear definition, teams solve the wrong problem or waste resources. The goal must be SMART — Specific, Measurable, Achievable, Relevant, Time-bound.",
          practice: "DMAIC — Define Phase — Project Charter"
        },
        {
          question: "Now you are in the Measure phase. What data do you collect first?",
          options: [
            { text: "Ask workers why they think defects happen — their gut feeling is enough", correct: false, score: 15 },
            { text: "Collect defect data by shift, machine, operator, raw material batch, and time of day for 4 weeks to establish your baseline and identify patterns", correct: true, score: 100 },
            { text: "Only measure the final product defect rate — nothing else matters", correct: false, score: 20 },
            { text: "Measure only the most recent week to save time", correct: false, score: 15 }
          ],
          explanation: "Six Sigma Measure phase requires establishing a baseline and identifying variation sources. Stratifying data by shift, machine, operator, and material batch reveals WHERE and WHEN defects occur — critical information for root cause analysis. Four weeks gives statistically meaningful data.",
          practice: "DMAIC — Measure Phase — Data Stratification"
        },
        {
          question: "Your data shows 80% of defects occur on Machine 3 during the night shift. What is your next step?",
          options: [
            { text: "Replace Machine 3 immediately", correct: false, score: 20 },
            { text: "Move to the Analyze phase — construct a fishbone (Ishikawa) diagram and use the 5 Whys to find the ROOT CAUSE of why Machine 3 on night shift produces defects", correct: true, score: 100 },
            { text: "Move the night shift workers to day shift", correct: false, score: 15 },
            { text: "Increase quality inspection frequency on Machine 3 output", correct: false, score: 25 }
          ],
          explanation: "The Analyze phase uses tools like the Fishbone Diagram (5Ms: Machine, Method, Material, Measurement, Man) and 5 Whys to find root causes — not symptoms. The data tells you WHERE the defects occur, but Analyze tells you WHY. You must find root cause before jumping to solutions.",
          practice: "DMAIC — Analyze Phase — Root Cause Analysis"
        },
        {
          question: "The 5 Whys reveals: Machine 3 calibration drifts after 6 hours. Night shift (12 hour shifts) never recalibrates mid-shift because the procedure only says 'calibrate at shift start.' What do you do in the Improve phase?",
          options: [
            { text: "Punish the night shift for not recalibrating mid-shift", correct: false, score: 0 },
            { text: "Buy a new machine that does not drift", correct: false, score: 20 },
            { text: "Update the Standard Operating Procedure to require recalibration every 5 hours, implement an automated calibration alert on Machine 3, pilot on night shift for 2 weeks and measure defect rate", correct: true, score: 100 },
            { text: "Just tell the night shift verbally to recalibrate more often", correct: false, score: 15 }
          ],
          explanation: "Six Sigma Improve phase implements solutions that address the ROOT CAUSE. The root cause is the procedure gap — not the workers or the machine itself. Updating the SOP institutionalizes the fix. A 2-week pilot tests the solution before full rollout. Automated alerts mistake-proof the process (Poka-Yoke).",
          practice: "DMAIC — Improve Phase — Solution & Poka-Yoke"
        },
        {
          question: "After 2 weeks the defect rate drops from 15% to 0.6%. How do you ensure it STAYS fixed in the Control phase?",
          options: [
            { text: "Declare victory, close the project, and move on", correct: false, score: 10 },
            { text: "Keep monitoring it yourself personally every day", correct: false, score: 15 },
            { text: "Implement a Statistical Process Control (SPC) chart on Machine 3 output, update training documents, hand over monitoring to the shift supervisor with clear control limits, and document the project learnings for other machines", correct: true, score: 100 },
            { text: "Return to the Define phase and start over to double-check", correct: false, score: 5 }
          ],
          explanation: "Six Sigma Control phase ensures the gains are SUSTAINED after the project closes. SPC charts visually show when a process is drifting out of control before defects occur. Updating training and handing ownership to the line supervisor institutionalizes the improvement. Documenting lessons spreads learning across the facility.",
          practice: "DMAIC — Control Phase — Sustaining Improvement"
        }
      ]
    },
    {
      id: "ss-2",
      title: "The Late Deliveries Problem",
      industry: "Logistics",
      practice: "DMAIC — Full Cycle",
      difficulty: "Practitioner",
      duration: "15 min",
      description: "You are a Six Sigma Black Belt at a national courier company. Customer satisfaction scores have dropped from 87% to 61% in 6 months. The main complaint: on-time delivery rate has fallen from 94% to 78%. You have been assigned to lead a DMAIC project. The target: restore on-time delivery to 95% within 3 months.",
      situation: "On-time delivery: 78% (target 95%). Customer satisfaction: 61%. 3 month deadline to fix.",
      urgency: "High",
      steps: [
        {
          question: "In your Define phase you need to create a SIPOC. What does SIPOC stand for and why do you need it?",
          options: [
            { text: "It stands for Solutions, Ideas, Problems, Outcomes, Costs — a brainstorming tool", correct: false, score: 5 },
            { text: "Suppliers, Inputs, Process, Outputs, Customers — it maps the end-to-end delivery process to identify where problems could enter the system", correct: true, score: 100 },
            { text: "Speed, Inspection, Performance, Operations, Control — a quality checklist", correct: false, score: 5 },
            { text: "You do not need SIPOC — just start measuring immediately", correct: false, score: 10 }
          ],
          explanation: "SIPOC is a high-level process map used in the Define phase. It shows the entire delivery process from suppliers (vehicle fleet, fuel, parcels) through inputs, process steps, outputs, and customers. It scopes the project and ensures everyone agrees on what process is being improved before measurement begins.",
          practice: "DMAIC — Define Phase — SIPOC Mapping"
        },
        {
          question: "Your data shows delays cluster around 3 cities. In those cities, 70% of delays happen on the 'last mile' delivery step (final delivery to door). Which Six Sigma tool helps you visualize this concentration of defects?",
          options: [
            { text: "A Gantt chart showing delivery timelines", correct: false, score: 10 },
            { text: "A Pareto Chart showing that last-mile delays in 3 cities account for 70% of all late deliveries", correct: true, score: 100 },
            { text: "A fishbone diagram of all possible delivery problems", correct: false, score: 25 },
            { text: "A control chart of daily delivery rates", correct: false, score: 20 }
          ],
          explanation: "The Pareto Chart (80/20 rule) is a core Six Sigma Analyze tool. It visually shows that a small number of causes (last mile, 3 cities) drive the majority of defects. This focuses your Improve efforts where they will have the most impact rather than trying to fix everything at once.",
          practice: "DMAIC — Analyze Phase — Pareto Analysis"
        },
        {
          question: "Root cause analysis reveals: drivers in the 3 cities have oversized delivery zones — averaging 47 stops per driver vs 28 stops in successful cities. What Improve solution do you recommend?",
          options: [
            { text: "Tell drivers to work faster", correct: false, score: 0 },
            { text: "Reduce delivery zone sizes in the 3 cities to 28-30 stops, run a 4-week pilot, and measure on-time delivery rate before full rollout", correct: true, score: 100 },
            { text: "Hire 100 new drivers across all cities immediately", correct: false, score: 20 },
            { text: "Only deliver to easy addresses and refuse difficult ones", correct: false, score: 0 }
          ],
          explanation: "The root cause is structural — oversized zones make on-time delivery mathematically impossible at current staffing. Zone rebalancing directly addresses the root cause. A pilot in the 3 affected cities tests the hypothesis before costly company-wide changes. This is evidence-based improvement.",
          practice: "DMAIC — Improve Phase — Root Cause Solution"
        }
      ]
    }
  ]
};
