# Portfolio Website

This portfolio website is a personal project showcasing my skills, projects, and experience. It's built with React and styled using Tailwind CSS for a responsive and modern design.

## Features

- **Responsive Design:** Ensures the website looks great on devices of all sizes.
- **Project Showcase:** Highlights individual projects with descriptions, technologies used, and links to live demos or GitHub repositories.
- **Contact Form:** Allows visitors to easily get in touch.
- **JSON Data:** Stores user information in a JSON file for easy access.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

If you have created a fork on GitHub, you can use `git clone` to clone the repo.
```sh
git clone https://github.com/your_username/repo_name
```

Or you can use the current repository directly.

```sh
git clone https://github.com/dog-broad/portfolio.git
```

2. Install NPM packages

```sh
npm install
```

3. Start the development server

```sh
npm start
```

## Deployment

This project includes a GitHub Actions workflow for deploying the build to GitHub Pages.

- Push your changes to the `main` branch.
- The workflow defined in `.github/workflows/builddeploy.yaml` will automatically build and deploy your project.

_The above `builddeploy.yaml` is currently non-functional and will be updated._

I am using `Vercel` for deployment.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [GitHub Actions](https://github.com/features/actions) - For CI/CD and deployment

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


Project Link: [rushyendra-portfolio.vercel.app](https://rushyendra-portfolio.vercel.app/)