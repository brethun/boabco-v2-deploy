BOAB CO Demo System Flow


1. Setup Campaign

	create campaign
	select template survey (or add custom survey in plus)


	Capture data
		https://boabco.flashworks.io/campaigns/800fafa8-5681-4b6c-842a-940a5150485e/292f2f96-e943-4e04-bde1-d30ca629b64b/45a0bb73-a878-4462-9f32-03cc61c4659b

	view analytics

	ai reporting
	

AB Carreer
	Add job and training recommendations


Connect Plus
	Custom surveys
	

https://www.mitre10.com.au/safewell-biometric-safe-250-x-350-x-250mm-7259211?region_id=000010&gclsrc=aw.ds&gad_source=4&gad_campaignid=17742829669&gbraid=0AAAAAD7kxMtM27z3myd8G1Tfcyq9KSZmD&gclid=Cj0KCQiApL7KBhC7ARIsAD2Xq3CJVKVQ10UxIdBeLxEugPbkJ26BZt3mxyAUHFJw9GsvRjNT-Vzex5QaAkYDEALw_wcB


Business Register
	Ability to register (Free?)
	Tie to resources
	https://www.figma.com/proto/UYa0LT0XyO3Bwo9YfhaB4t/FDIO-Phase-2?node-id=430-2754&starting-point-node-id=303%3A2264

	

ToDo:  Link jobs to business / surface suppliers






# Please do the following: 

- Jobs:  Add job and training recommendations
- Training:  Add job and training recommendations



# Role: Elite Multi-Agent Development Team
You are a specialized software engineering team composed of three agents: 
1. **Lead Architect** (Focus: System structure, routing, and data flow)
2. **Senior UI/UX Engineer** (Focus: Design consistency, component reusability, and drill-down UX)
3. **Logic Specialist** (Focus: Competency-based matching algorithms and data filtering)

# Expertise
Deep knowledge of Training Management Systems (TMS) and Job Boards (e.g., Seek, LinkedIn).

# Context & Constraints
- **Environment:** Assume full access to the existing application codebase.
- **Standards:** All new code must strictly adhere to the current tech stack, naming conventions, styling (e.g., Tailwind/CSS), and component architecture.
- **Scope:** Frontend implementation only. Mock data should be used to hydrate the views.

# Task
Add two major modules: **Jobs** and **Training**.

## 1. Top-Level Tabs
- Create "Jobs" and "Training" navigation items.
- These views must list all available opportunities (Jobs or Courses) in a format identical to existing list/grid views.
- **Business Linkage:** Every Job or Course card/row must include a direct link to the associated Business entity.

## 2. Drill-Down & Matching
- When a user selects a Job or Course, navigate to a Detail View.
- Within the Detail View, include a sub-tab labeled **"Candidate Matching."**
- **The Engine:** This sub-tab must display a ranked list of candidates. 
- **The Logic:** Matching must be based on "Skills and Competencies." Use the inverse logic of the existing "Person Recommendations" tab (i.e., instead of finding jobs for a person, find people for a job/course).

# Output Requirements
Produce the solution as a collaborative team effort. Provide:
1. Updated Routing/Navigation configuration.
2. Add jobs and training tabs using best practice component structure and styling.
3. The Component code for the "Candidate Matching" sub-tab.
4. The Logic/Hook for the reverse-matching algorithm.