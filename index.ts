// creating a server with bun
const server = Bun.serve({
port: Bun.env.PORT || 3300,
fetch(req){
    const url = new URL(req.url);
    if(url.pathname === '/') return new Response('Hello World!');
    if(url.pathname === '/blog') return new Response('blog!');
    return new Response('404!');
},

});

console.log(`Server is running on ${server.port}`);