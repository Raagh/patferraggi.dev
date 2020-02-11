---
path: "{{year}}/{{month}}/{{slug}}/index"
title: How I found a problem in Angular unit testing and decided to fix it myself.
date: "2019-10-26"
description: ""
thumbnail: ./cover.jpeg
---

![VSCODE marketplace](https://res.cloudinary.com/practicaldev/image/fetch/s--IgFz9gfV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/2z9yyu075xt91sr2g1xl.png)

Hi my name is Patricio and just like you, I am software developer. Around a year ago I started working with Angular at my current job as I wanted to be a Fullstack developer again. I worked professionally with Angular.js before and I did a few test projects with Angular but nothing serious.

Coming from a C#/JavaScript background doing TypeScript was not a problem at all. I felt right at home and developed the necessary skills quickly. I had my visual studio code environment ready so I went ahead and started developing using a Test Driven Development approach, as I was so used to in C#.

---

I created my first tests using Jasmine and Karma as it comes by default with Angular when I first noticed a problem. I had to run “ng test” to run tests in the project, see the output in the console or open a browser and see the results in Karma. If I wanted to run a single test by default, I had to modify the code so it would only run that test.

I was completely astonished, I could not believe that this was how Angular developers were working. The hole testing workflow felt weird, counterproductive and it really slowed me down. Coming from Visual Studio I was so used to having a nice interactive UI where you see all the tests: you run the hole suite or run them individually and get immediate feedback. I needed something similar for Angular to work as efficiently as I do in C#, but I couldn’t find it(Jetbrains ‘s WebStorm had something similar but I was a fan of VS Code and also did not want to buy a product license).

So what did I decide to do? Build my own solution.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/tmfv22164xb8ngg8i2gh.png)

This is how my “Angular/Karma Test Explorer” extension came to life.

With the extension you re able to open an Angular project in Visual Studio Code and immediately see all your tests inside the explorer.
You are also able to run the whole suite, or single tests and see the results right away, even see gutter decorations in the file or run the tests directly from the file.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/7nsmr183g6szwk2ervrp.png)

It all started as a personal issue I had and could not find a solution for, but eventually people started responding to the extension. It started being used at my workplace and other companies, and people showed their appreciation to the project. Users started to request features and even submitted new features which I did not consider important when I started building it.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/fwg87ttoqs0zgiipo81f.png)

I was not proficient in Angular or TypeScript (the extension is built on TypeScript so I feel a lot more confident about it now), I would not even consider myself a senior developer, but I saw a problem and took the personal challenge to build something that myself and other people could enjoy.

---

And this is the takeaway from this article. We as developers create solutions, and no matter the skills you have, you have probably already seen a missing feature, or problem that is not being solved. Don’t wait for someone to fix it for you, go ahead and do it yourself. Help someone else and increase your own skills in the process, I promise you it is going to be a lot of fun.

If you want to checkout the project you can find it directly on VSCode or in the Marketplace, if you want to contribute please take a look at the Github repo or if you just want to have a chat with me please feel free to contact me on Twitter. Thank you for taking the time to read this and hopefully it encourages you to keep on start building new products :).
