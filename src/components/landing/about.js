import React from "react"

export default () => (
  <section id="about" className="about-container">
    <div className="background__title">
      So <span className="text--isSecondaryColor">about me!</span>, what's my
      background
    </div>
    <article className="background__text">
      <p>
        Over the past 5 years, I have created a great variety of high quality
        web business applications using technologies like C#, asp.net core,
        HTML5, CSS3, Angular, Javascript and Typescript. I focus on creating
        software that is testable, maintainable, reusable and adaptive,
        requirements for success in Agile environments.
      </p>
      <p>
        I've have experience in startup, medium and large size enterprises and
        I'm used to working in teams but also managing my own projects. Some of
        the companies I've worked for include: Rydoo, Telefonica Argentina,
        Cencosud and YPF. Check my
        <a
          className="blog-news__link"
          href="https://www.linkedin.com/in/patricio-ferraggi-ares/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn{" "}
        </a>
        for more details.
      </p>
      <p>
        As an employee I'm proactive, detail oriented and I enjoy playing an
        active role in improving business.
      </p>
    </article>

    <div className="extra__title">Apart from work...</div>
    <article className="extra__text">
      <p>
        I love writting on my blog, creating software development courses,
        giving coaching to other developers and experimenting with multiple
        technologies on my open source projects.
      </p>
      <p>
        I exercise often and I've been practicing Muay Thai for over 7 years.
      </p>
      <p>
        I also like to travel and taking pictures, specially from my cat who
        hates me for it.
      </p>
    </article>
  </section>
)
