This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Lunara Dashboard
## Project Overview
The Lunara Dashboard is a comprehensive, responsive web application designed to provide insights and analytics for business metrics. The dashboard features interactive charts, data tables, and a sidebar navigation menu, making it easy to explore financial data and monitor key performance indicators.

## Tools and Technologies Used
### Next.js: 
The project is built using Next.js, a React framework that enables server-side rendering, static site generation, and provides a strong foundation for building high-performance web applications.
### TypeScript: 
TypeScript is used to add static typing to the project, improving code quality, reducing bugs, and enhancing developer productivity.
### Material-UI (MUI): 
Material-UI components are utilized for building a sleek, consistent user interface that follows Material Design principles. This includes the use of Drawer for the sidebar, Table for data display, and various other components to ensure a cohesive look and feel.
### Styled Components: 
For styling, we used styled-components, which allows for writing CSS in JavaScript. This helps in creating modular, reusable, and scoped styles for the components.
### Ant Design (AntD): 
The data tables in the dashboard are powered by Ant Design (AntD), a powerful React UI framework known for its comprehensive set of components. AntD's Table component is used for displaying tabular data, providing features such as pagination, sorting, and custom styling, making it easy to manage and display large datasets efficiently.
### Recharts: 
The project uses Recharts to create responsive and interactive charts, providing visual representations of financial data, including balance, cost, revenue, and gross profit metrics.
### Redux Toolkit: 
Redux Toolkit is used for global state management, making it easier to manage and share application state across components, especially useful for handling data shared between charts and tables.
### Git & GitHub: 
The version control for this project is managed using Git, and the code is hosted on GitHub. The repository tracks all changes and allows for collaboration and version history.

## Features
### Responsive Design: 
The dashboard is fully responsive, ensuring an optimal user experience across various devices, including desktops, tablets, and mobile phones.
### Interactive Charts: 
Users can interact with dynamic charts to visualize key business metrics over time.
### Customizable Sidebar: 
The sidebar features links to different sections of the dashboard, with a toggle feature for mobile devices.
### Advanced Data Table: 
Powered by Ant Design, the data table component offers a robust solution for displaying and managing financial data. It supports various features like pagination, sorting, and custom cell rendering, ensuring that large datasets are presented efficiently.

## ScreenShots of Lunara Dashboard project
![Lunara-dashboard](https://github.com/user-attachments/assets/917c77eb-242b-461e-8cbe-27b21ecfb007)

# Mobile View with drawer closed
![drawerClosed](https://github.com/user-attachments/assets/a186b61a-7a04-4f80-b04c-5edac1730b4e)

# Mobile with drawer open
![drawerOpen](https://github.com/user-attachments/assets/f7c8acc3-c01f-4d75-8544-57a3b152d840)

## Getting Started
To run this project locally:

Clone the repository.
Install dependencies using npm install.
Run the development server with npm run dev.
Open http://localhost:3000 to view the project in the browser.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
