import { Projects } from "./index";

export function generateTempData() {
    Projects.Add('Website Redesign');
    Projects.GetProject('Website Redesign').AddTask('Create wireframes for the homepage', 'Design the initial wireframes for the homepage, including the header, footer, and main content sections.', 'today', 'high');

    Projects.Add('Marketing Campaign for Product Launch');
    Projects.GetProject('Marketing Campaign for Product Launch').AddTask('Develop social media strategy', 'Create a social media campaign plan to promote the upcoming product launch, including platform selection, posting schedule, and content types.', 'tomorrow', 'medium');

    Projects.Add('Mobile App Development');
    Projects.GetProject('Mobile App Development').AddTask('Build login functionality', 'Implement login functionality for the app with email and password authentication.', 'next week', 'low');
    Projects.GetProject('Mobile App Development').AddTask('Set up user profile page', 'Create the user profile page where users can update personal information and preferences.', 'next week', 'low');
    Projects.GetProject('Mobile App Development').AddTask('Integrate push notifications', 'Integrate push notifications for user updates and messages within the app.', 'next week', 'low');

    Projects.Add('Client Presentation Preparation');
    Projects.GetProject('Client Presentation Preparation').AddTask('Finalize PowerPoint slides', 'Complete the final version of the PowerPoint presentation, ensuring all data is accurate and visuals are aligned with branding guidelines.', 'today', 'high');

    Projects.Add('Employee Onboarding System');
    Projects.GetProject('Employee Onboarding System').AddTask('Set up new employee welcome portal', 'Develop an online portal for new hires with access to training materials, benefits, and company policies.', 'next week', 'medium');

    Projects.Add('SEO Optimization for Company Website');
    Projects.GetProject('SEO Optimization for Company Website').AddTask('Conduct website audit', 'Perform a thorough SEO audit of the website, identifying areas for improvement in site speed, metadata, and mobile usability.', 'tomorrow', 'low');
    Projects.GetProject('SEO Optimization for Company Website').AddTask('Improve page load speed', 'Optimize the images, scripts, and resources to improve the website’s page load speed by at least 30%.', 'tomorrow', 'low');

    Projects.Add('Customer Support Automation');
    Projects.GetProject('Customer Support Automation').AddTask('Implement live chat feature', 'Add a live chat feature to the website to assist customers with common questions in real-time.', 'today', 'high');

    Projects.Add('Product Feature Release');
    Projects.GetProject('Product Feature Release').AddTask('Write release notes', 'Draft and finalize release notes that highlight new features, bug fixes, and improvements for the next version of the product.', 'next month', 'medium');
    Projects.GetProject('Product Feature Release').AddTask('Test new feature in production', 'Run thorough tests of the new product feature in a staging environment before pushing it to production.', 'next month', 'medium');
    Projects.GetProject('Product Feature Release').AddTask('Prepare marketing materials', 'Design banners, social media posts, and email templates for the upcoming product feature launch.', 'next month', 'medium');
    Projects.GetProject('Product Feature Release').AddTask('Coordinate beta testing', 'Organize a group of beta testers to gather feedback and identify issues before the public release.', 'next month', 'medium');

    Projects.Add('CRM System Update');
    Projects.GetProject('CRM System Update').AddTask('Upgrade CRM software', 'Install the latest version of the CRM software and ensure all integrations are working properly.', 'next week', 'high');
}