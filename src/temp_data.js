import { Projects } from "./index";

export function GenerateTempData() {
    Projects.Add('Website Redesign');
    Projects.GetProject(1).AddTask('Create wireframes for the homepage', 'Design the initial wireframes for the homepage, including the header, footer, and main content sections.', '2025-01-15', 'high');

    Projects.Add('Marketing Campaign for Product Launch');
    Projects.GetProject(2).AddTask('Develop social media strategy', 'Create a social media campaign plan to promote the upcoming product launch, including platform selection, posting schedule, and content types.', '2025-01-18', 'medium');

    Projects.Add('Mobile App Development');
    Projects.GetProject(3).AddTask('Build login functionality', 'Implement login functionality for the app with email and password authentication.', '2025-01-20', 'low');
    Projects.GetProject(3).AddTask('Set up user profile page', 'Create the user profile page where users can update personal information and preferences.', '2025-01-23', 'low');
    Projects.GetProject(3).AddTask('Integrate push notifications', 'Integrate push notifications for user updates and messages within the app.', '2025-01-25', 'low');

    Projects.Add('Client Presentation Preparation');
    Projects.GetProject(4).AddTask('Finalize PowerPoint slides', 'Complete the final version of the PowerPoint presentation, ensuring all data is accurate and visuals are aligned with branding guidelines.', '2025-01-12', 'high');

    Projects.Add('Employee Onboarding System');
    Projects.GetProject(5).AddTask('Set up new employee welcome portal', 'Develop an online portal for new hires with access to training materials, benefits, and company policies.', '2025-02-05', 'medium');

    Projects.Add('SEO Optimization for Company Website');
    Projects.GetProject(6).AddTask('Conduct website audit', 'Perform a thorough SEO audit of the website, identifying areas for improvement in site speed, metadata, and mobile usability.', '2025-01-15', 'low');
    Projects.GetProject(6).AddTask('Improve page load speed', 'Optimize the images, scripts, and resources to improve the websites page load speed by at least 30%.', '2025-01-18', 'low');

    Projects.Add('Customer Support Automation');
    Projects.GetProject(7).AddTask('Implement live chat feature', 'Add a live chat feature to the website to assist customers with common questions in real-time.', '2025-01-12', 'high');

    Projects.Add('Product Feature Release');
    Projects.GetProject(8).AddTask('Write release notes', 'Draft and finalize release notes that highlight new features, bug fixes, and improvements for the next version of the product.', '2025-01-30', 'medium');
    Projects.GetProject(8).AddTask('Test new feature in production', 'Run thorough tests of the new product feature in a staging environment before pushing it to production.', '2025-02-02', 'medium');
    Projects.GetProject(8).AddTask('Prepare marketing materials', 'Design banners, social media posts, and email templates for the upcoming product feature launch.', '2025-02-05', 'medium');
    Projects.GetProject(8).AddTask('Coordinate beta testing', 'Organize a group of beta testers to gather feedback and identify issues before the public release.', '2025-02-08', 'medium');

    Projects.Add('CRM System Update');
    Projects.GetProject(9).AddTask('Upgrade CRM software', 'Install the latest version of the CRM software and ensure all integrations are working properly.', '2025-01-28', 'high');
}
