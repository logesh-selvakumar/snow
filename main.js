window.onload = function()
{
    let cnv = document.getElementById("Canvas");
    let ctx = cnv.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;
    cnv.width = W;
    cnv.height = H;

    let maxFlakes = 100;
    let snow = [];

    for (n = 0; n < maxFlakes; n++) 
    {
        snow.push({ 
            x: Math.random()*W,
            y: Math.random()*H,
            r: Math.random()*4+2,
        })
    }

    function snowFlakes() 
    {
        ctx.clearRect(0,0,W,H);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        for (i = 0; i<snow.length; i++)
        {
            ctx.moveTo(snow[i].x, snow[i].y);
            ctx.arc(snow[i].x, snow[i].y, snow[i].r, 0, Math.PI * 2);
        }
        ctx.fill();
        snowFall();
    }

    function snowFall()
    {
        for (i = 0; i<snow.length; i++)
        {
            let s = snow[i];
            s.y += Math.pow(Math.random()+1, 2) + 1;

            if (s.y > H)
            {
                snow[i] = { 
                    x: Math.random()*W,
                    y: 0,
                    r: Math.random()*4+2
                }
            }
        } 
    }
    
    document.addEventListener('keydown', keydown);

    function keydown(event)
    {
        console.log(event.code);
        if (event.code == 'Space')
        {
            snow.pop();
        }
        if (event.code == 'Digit1')
        {
            snow.push({ 
                x: Math.random()*W,
                y: Math.random()*H,
                r: Math.random()*4+2,
            })
        }
    }
    
    setInterval(snowFlakes, 30);

}
