import React from 'react';

const Footer = () => {
    return (


        <footer class="p-4 bg-gray-500 text-white rounded-t-lg shadow md:px-6 md:py-8 ">
            <div class="sm:flex sm:items-center sm:justify-between">
                <p href="" class="flex items-center mb-4 sm:mb-0">

                    <span class="self-center text-2xl font-semibold whitespace-nowrap ">Tutor Hunt</span>
                </p>
                <ul class="flex flex-wrap items-center mb-6 text-sm  sm:mb-0 ">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span class="block text-sm  sm:text-center">© 2022 <a href="https://flowbite.com/" class="hover:underline">Tutor Hunt™</a>. All Rights Reserved.
            </span>
        </footer>



    );
};

export default Footer;