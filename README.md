<div align="center">

# Polls

🚧 :construction: README under construction  🚧 :construction:

<!-- CHANGE ocarlosbarros AND Pools IN ALL LINK LOCATION -->

[![ocarlosbarros - Polls](https://img.shields.io/static/v1?label=ocarlosbarros&message=Polls&color=3178c6&style=for-the-badge&logo=github)](https://github.com/ocarlosbarros/polls "Go to GitHub repo")

<!-- BADGES OF STATUS IN DEVELOPEMNT AND LICENSE MIT -->
<img src="http://img.shields.io/static/v1?label=status&message=in%20development&color=3178c6&style=for-the-badge"/>
<img src="http://img.shields.io/static/v1?label=license&message=MIT&color=3178c6&style=for-the-badge"/>

<!-- BELOW CHANGE THE PROJECT NAME AND THE PATH TO A LOCAL IMAGE REPRESENTING THE PROJECT PROJECT -->

<!-- !Polls([PATH_IMAGE]) example: ![MY APP](./src/images/applicacao.png)--> 

</div>

# :clipboard: Table of Contents

* [About Project](#point_right-about-project)
    * [Features](#heavy_check_mark-features)
* [Built With](#hammer_and_wrench-built-with)
    * [Technologies and Libs](#computer-technologies-and-libs)
* [Getting Started](#rocket-getting-started)
    * [Requirements](#warning-requirements)
    * [Run Application](#gear-run-application)
* [Tests](#test_tube-tests)
* [License](#page_facing_up-license)
* [Developers](#octocat-developers)

#   :point_right: About project

A real-time voting system where users can create a poll and other users can cast their votes. The system generates a ranking among the options and updates the votes in real-time.

<p align="right"><a href="#polls">back to top</a></p>

##  :heavy_check_mark: Features 

### HTTP

#### POST /polls

Create a new poll.

#### Request body

```json
{
  "title": "Qual a melhor linguagem de programação?",
  "options": [
    "JavaScript",
    "Java",
    "PHP",
    "C#"
  ]
}
```
#### Response body

```json
{
  "pollId": "194cef63-2ccf-46a3-aad1-aa94b2bc89b0"
}
```

<p align="right"><a href="#polls">back to top</a></p>

#### GET `/polls/:pollId`

Return data from a single poll.

#### Response body

```json
{
	"poll": {
		"id": "e4365599-0205-4429-9808-ea1f94062a5f",
		"title": "Qual a melhor linguagem de programação?",
		"options": [
			{
				"id": "4af3fca1-91dc-4c2d-b6aa-897ad5042c84",
				"title": "JavaScript",
				"score": 1
			},
			{
				"id": "780b8e25-a40e-4301-ab32-77ebf8c79da8",
				"title": "Java",
				"score": 0
			},
			{
				"id": "539fa272-152b-478f-9f53-8472cddb7491",
				"title": "PHP",
				"score": 0
			},
			{
				"id": "ca1d4af3-347a-4d77-b08b-528b181fe80e",
				"title": "C#",
				"score": 0
			}
		]
	}
}
```

#### POST `/polls/:pollId/votes`

Add a vote to specific poll.

#### Request body

```json
{
  "pollOptionId": "31cca9dc-15da-44d4-ad7f-12b86610fe98"
}
```

### WebSockets

#### ws `/polls/:pollId/results`

#### Message

```json
{
  "pollOptionId": "da9601cc-0b58-4395-8865-113cbdc42089",
  "votes": 2
}
```

<!-- ends first block of content -->

#   :hammer_and_wrench: Built with 

This project was built with Nodejs.

* ##    :computer: Technologies and Libs

    <!-- FILL TECHS AND PACKAGES BELOW -->
    - Nodejs
    - @types/node
    - Typescript
    - TSX
    - Prisma
    - Fastify
    - Fastify/cookie
    - Fastify/websocket
    - Zod
    - IORedis
    - Docker
    - Postgress
    - Redis

<p align="right"><a href="#polls">back to top</a></p>

<!-- ends second block of content -->

#   :rocket: Getting Started 

These instructions will allow you to get a copy of the project on your local machine for development and testing purposes.

##  :warning: Requirements 

<p align="right"><a href="#polls">back to top</a></p>

##  :gear: Run Application

1. Clone project

```
git clone git@github.com:ocarlosbarros/pools.git
```

2. Access project folder

```
cd pools
```

3. Install dependencies

```
npm install
```

4. Run project
```
npm run dev
```


<p align="right"><a href="#polls">back to top</a></p>

#  :test_tube: Tests

To run tests, run the following command

<p align="right"><a href="#polls">back to top</a></p>

#   :page_facing_up: License 

Project Name is MIT Licensed. See ```LICENSE.md``` for more information.

<br/>

<p align="right"><a href="#polls">back to top</a></p>


# :octocat: Developers 

<a href="https://ocarlosbarros.github.io" target="_blank">
 <div>
    <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/22147889?v=4" width="100px;" alt=""/>
    <br />
    <p style="margin-left:10px"><b>Carlos Barros</b></p>
 </div>
 </a> 


Developed with 💜 by Carlos Barros

<div align="left">
    <a href="https://www.linkedin.com/in/ocarlosbarros" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=badge&logo=linkedin&logoColor=white" target="_blank"></a>
    <a href = "mailto:carlos_dbs@hotmail.com"><img src="https://img.shields.io/badge/Outlook-0078D4?style=badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a>
    <a href="https://www.instagram.com/o_carlosbarros.dev/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=badge&logo=instagram&logoColor=white" target="_blank"></a>
    <a href="https://www.youtube.com/channel/UC1xY9hXr4h_77rfKKk-i3Vg" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=badge&logo=youtube&logoColor=white" target="_blank"></a>
</div>

<p align="right"><a href="#polls">back to top</a></p>

