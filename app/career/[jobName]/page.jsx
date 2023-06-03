import React from 'react'

export default function page({params}) {
  return (
    <section className="px-3 sm:px-6 md:px-12 lg:px-28 xl:px-36 flex">
      <div className="lg:w-[70%]">
        <div
          className="flex justify-between sm:items-center py-3 border-b border-gray-400 flex-col sm:flex-row"
        >
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-10"
              src="https://company-assets.showwcase.com/showwcase_1649326857208.png"
              alt=""
            />
            <div>
              <h1 className="text-xl font-bold">{params.jobName}</h1>
              <p className="text-gray-400 text-lg">Showwcase</p>
            </div>
          </div>
          <a
            className="text-blue-600 py-2 border text-center ml-24 sm:ml-0 border-blue-600 rounded font-bold whitespace-nowrap mt-2 sm:mt-0 w-36"
            href="#"
            >Login to Apply</a
          >
        </div>

        <div className="grid grid-cols-3 py-3">
          <div>
            <h2 className="font-bold">Location</h2>
            <p className="text-gray-500 text-sm">Remote</p>
          </div>
          <div>
            <h2 className="font-bold">Location</h2>
            <p className="text-gray-500 text-sm">Remote</p>
          </div>
        </div>

        <div className="py-3">
          <h2 className="font-bold">Tech Stack</h2>
          <div className="flex my-2 gap-4 flex-wrap">
            <p
              className="px-2 py-1 font-semibold bg-slate-900 flex rounded items-center"
            >
              <img
                className="w-4 h-4 mr-2"
                src="https://stack-icons.showwcase.com/CSS_1635322912032.png"
                alt=""
              />
              CSS
            </p>
            <p
              className="px-2 py-1 font-semibold bg-slate-900 flex rounded items-center"
            >
              <img
                className="w-4 h-4 mr-2"
                src="https://stack-icons.showwcase.com/CSS_1635322912032.png"
                alt=""
              />
              Java
            </p>
            <p
              className="px-2 py-1 font-semibold bg-slate-900 flex rounded items-center"
            >
              <img
                className="w-4 h-4 mr-2"
                src="https://stack-icons.showwcase.com/CSS_1635322912032.png"
                alt=""
              />
              Python
            </p>
            <p
              className="px-2 py-1 font-semibold bg-slate-900 flex rounded items-center"
            >
              <img
                className="w-4 h-4 mr-2"
                src="https://stack-icons.showwcase.com/CSS_1635322912032.png"
                alt=""
              />
              CSS
            </p>
            <p
              className="px-2 py-1 font-semibold bg-slate-900 flex rounded items-center"
            >
              <img
                className="w-4 h-4 mr-2"
                src="https://stack-icons.showwcase.com/CSS_1635322912032.png"
                alt=""
              />
              Java
            </p>
            <p
              className="px-2 py-1 font-semibold bg-slate-900 flex rounded items-center"
            >
              <img
                className="w-4 h-4 mr-2"
                src="https://stack-icons.showwcase.com/CSS_1635322912032.png"
                alt=""
              />
              Python
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 py-3">
          <div>
            <h2 className="font-bold">Company Size</h2>
            <p className="text-gray-500 text-sm">11-25</p>
          </div>
          <div>
            <h2 className="font-bold">Investment Stage</h2>
            <p className="text-gray-500 text-sm">Seed</p>
          </div>
          <div>
            <h2 className="font-bold">Industry</h2>
            <p className="text-gray-500 text-sm">Community</p>
          </div>
        </div>

        <div className="py-3 border-b border-gray-400">
          <h2 className="font-bold">Experience Level</h2>
          <div
            className="grid my-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-center"
          >
            <p className="bg-slate-900 rounded-md py-2">Beginner</p>
            <p className="bg-slate-900 rounded-md py-2">Junior</p>
            <p className="bg-blue-600 rounded-md py-2">Mid-level</p>
            <p className="bg-slate-900 rounded-md py-2">Senior</p>
            <p className="bg-slate-900 rounded-md py-2">Expert</p>
          </div>
        </div>

        <div className="py-3">
          <h1 className="font-bold text-xl">Description</h1>
          <h2 className="font-bold text-xl my-4">Job Description</h2>
          <p className="text-lg">
            We are looking for a talented and experienced Ruby on Rails Backend
            Engineer. As a Ruby on Rails Backend Engineer, you will be
            responsible for developing and maintaining high-quality
            applications. Your expertise will ensure the stability, scalability,
            and performance of our backend systems. You will collaborate closely
            with cross-functional teams, including front-end developers, product
            managers, and designers, to deliver exceptional software solutions.
          </p>
          <h2 className="font-bold text-xl my-4">Responsibilities</h2>
          <ul className="list-disc text-lg pl-10">
            <li>
              Design, develop, and maintain Ruby on Rails applications to meet
              project requirements.
            </li>
            <li>
              Gather and translate business requirements into technical
              specifications.
            </li>
            <li>
              Build efficient and scalable server-side solutions using the Ruby
              on Rails framework.
            </li>
            <li>
              Implement and integrate APIs, databases, and other third-party
              services.
            </li>
            <li>
              Optimize application performance, database queries, and response
              times.
            </li>
            <li>
              Write clean, maintainable, and testable code following best
              practices and coding standards.
            </li>
            <li>
              Collaborate with front-end developers to integrate user interfaces
              with server-side logic.
            </li>
            <li>
              Conduct code reviews, provide constructive feedback, and ensure
              code quality and consistency.
            </li>
            <li>
              Troubleshoot and debug issues, identify bottlenecks, and propose
              solutions.
            </li>
            <li>
              Monitor and maintain application security, performance, and
              scalability.
            </li>
            <li>
              Stay up-to-date with industry trends, new technologies, and best
              practices in Ruby on Rails development.
            </li>
          </ul>
          <h2 className="font-bold text-xl my-4">Requirements</h2>
          <ul className="list-disc text-lg pl-10">
            <li>
              Strong experience in developing web applications using Ruby on
              Rails framework.
            </li>
            <li>
              Proficiency in Ruby programming language and familiarity with its
              ecosystem.
            </li>
            <li>
              Solid understanding of MVC architecture and RESTful web services.
            </li>
            <li>
              Knowledge of relational databases (e.g., PostgreSQL, MySQL) and
              query optimization.
            </li>
            <li>Familiarity with version control systems (e.g., Git).</li>
            <li>Ability to write efficient, reusable, and testable code.</li>
            <li>Strong problem-solving skills and attention to detail.</li>
            <li>Excellent communication and collaboration skills.</li>
            <li>
              Bachelors degree in Computer Science, Engineering, or a related
              field (or equivalent experience).
            </li>
          </ul>
          <h2 className="font-bold text-xl my-4">Good to Have:</h2>
          <ul className="list-disc text-lg pl-10">
            <li>
              Experience in other backend languages such as Python, Java, or
              Node.js.
            </li>
            <li>
              Experience with front-end technologies such as HTML, CSS, and
              JavaScript.
            </li>
            <li>
              Knowledge of non-relational databases (e.g., MongoDB, Redis) and
              their integration with Ruby on Rails.
            </li>
            <li>
              Familiarity with cloud platforms (e.g., AWS, Azure) and deploying
              Rails applications.
            </li>
            <li>
              Understanding of containerization and orchestration technologies
              like Docker and Kubernetes.
            </li>
            <li>
              Knowledge of automated testing frameworks (e.g., RSpec) and
              continuous integration/continuous deployment (CI/CD) pipelines.
            </li>
            <li>
              Experience with performance monitoring and optimization tools.
            </li>
            <li>
              Familiarity with Agile/Scrum methodologies and project management
              tools.
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]"></div>
    </section>
  )
}
