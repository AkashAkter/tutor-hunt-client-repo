import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-green-200 m-10 p-10 hover:bg-teal-300 rounded-md dark:bg-slate-300'>
                <h2 className='text-2xl mb-2'>What is cors?</h2>
                <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. An API is a set procedure for two programs to communicate. This means that API resources are consumed by other clients and servers. Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser. Express allows you to configure and manage an HTTP server to access resources from the same domain. The three parts that form an origin are protocal, domain, and port.</p>
            </div>
            <div className='bg-green-200 m-10 p-10 hover:bg-teal-300 rounded-md dark:bg-slate-300'>
                <h2 className='text-2xl mb-2'>Why are we using firebase? What other options do we have to implement authentication?</h2>
                <p>The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. When you build cross-platform apps with our Apple platforms, Android, and JavaScript SDKs, all of your clients share one Realtime Database instance and automatically receive updates with the newest data.<br /> Authentication is used by a server when the server needs to know exactly who is accessing their information or site. Authentication is used by a client when the client needs to know that the server is system it claims to be. In authentication, the user or computer has to prove its identity to the server or client. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to. Authentication does not determine what tasks the individual can do or what files the individual can see. Authentication merely identifies and verifies who the person or system is.
                </p>
            </div>
            <div className='bg-green-200 m-10 p-10 hover:bg-teal-300 rounded-md dark:bg-slate-300'>
                <h2 className='text-2xl mb-2'>How does private route work?</h2>
                <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
            </div>
            <div className='bg-green-200 m-10 p-10 hover:bg-teal-300 rounded-md dark:bg-slate-300'>
                <h2 className='text-2xl mb-2'>What is Node? How does Node work?</h2>
                <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node. <br /> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                </p>
            </div>
        </div>
    );
};

export default Blogs;