import React from 'react'

function Us() {

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Alan Erives",
            title: "Mobile Dev and Frontend Designer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)"
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Josue Medina",
            title: "Backend Dev and Hardware Dev",
            desc: "Apunto a ser desarrollador FullStack, este solo fue un paso hacia adelante",
            linkedin: "javascript:void(0)"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Hugo Alvidrez",
            title: "Designer and Administrative Manager",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)"
        }
    ]

    return (
        <section className="py-14 bg-[#C1FCe2] precio flex flex-row gap-[20%] items-center justify-start px-[5rem]  
        h-[60rem] pt-[18rem] mt-[-15rem] relative z-[0] ">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        El equipo encargado del desarrollo
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Estudiantes de la utch bis desarrollaron juntos un sistema embebido
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
                                        <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                           
                                            <a href={item.linkedin}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Us