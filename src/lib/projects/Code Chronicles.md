# Technologies
For this website, I wanted to use new technologies. That's why I started learning SvelteKit in the first place. The website had a first version that used SvelteKit, MongoDB and TailwindCSS. But after nearly a year of using SvelteKit, and learning more and more, I wanted to re-do the while project.

# Project description
So, I started by using Svelte 5 and ditching the MongoDB database for a dynamic only approach. All blog posts are written using markdown. In each post, there is metadata containing the languages used, the category of the post, the date at witch it was posted, ... All of that data is fetched from every posts to, for exemple, make a ranking of the most used languages in the post. With that method, I can just write articles and they show right up without having to add them to a database.
