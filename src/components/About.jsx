import React from 'react'
import Image from 'next/image'

import DevImg from './DevImg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Paul Andrew'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+63 921 2938 343'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'andrewonrubia@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 21 Jan, 2006'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Senior Highschool Student'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Naga City, Camarines Sur, Phillippines'
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                icon: 'University Of Nueva Caceres',
                text: 'Junior Highschool',
                year: '2018-2022'
            },
            {
                icon: 'Naga City School of Arts and Trades',
                text: 'Senior Highschool',
                year: '2022 - 2024'
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Tamako Discord Bot',
                role: 'API Developer',
                years: '2020 - 2021'
            },
            {
                company: 'Thighs\s .gg/balls Discord Server',
                role: 'Bot Developer',
                years: '2021 - Present'
            }
        ]
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS'
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'JavaScript, Typescript',
            },
            {
                name: 'Back-end Development'
            }
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codecov/codecov-plain.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original-wordmark.svg'
            },
            {
                imgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original-wordmark.svg'
            }
        ]
    }
]


export default function About() {
    const getData = (arr, title) => {
        return arr.filter(item => item.title === title)
    }
    return (
        <section className='xl:h-[860px] pb-12 xl:pv-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About Me</h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyle='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'> {/** <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'> */}
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualification'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* Tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal tab */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Hi, Im Paul Andrew</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>I'm 17 year old first-year senior highschool student from Philippines. 
                                           I’m proficient in programming with JavaScript, and im currently learning Python.
                                           I am open to internship/project opportunities.
                                        </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                    <div className='text-primary'>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div className="">English, Tagalog, Bicol</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualification tab */}
                                <TabsContent value='qualification'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                                    </div>
                                    {/* experience and education */}
                                    <div>
                                        {/* experience */}
                                        <div>
                                            <div>
                                                <Briefcase />
                                                <h4 className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    {getData(qualificationData, 'experience')[0].title}
                                                </h4>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'experience')[0].data.map((item, index) => {
                                                        const { company, role, years } = item;
                                                        return (
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                    <div className='text-based font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div></div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>skills info</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
