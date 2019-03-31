const body = window.document.getElementsByTagName('body')[0];

const canvas = window.document.createElement('canvas');

body.onload = ()=>{
    body.append(canvas);
    const bodySize = body.getBoundingClientRect();
    canvas.width = bodySize.width -6;
    canvas.height = 500
    const ctx = canvas.getContext('2d');

    window.addEventListener('mousemove', ({pageX, pageY}) => {

        const cCoords = canvas.getBoundingClientRect();
        console.log({cCoords})
        draw({x: pageX - cCoords.left, y: pageY - cCoords.top});
    })
    window.addEventListener('resize', ()=>{
        const bodySize = body.getBoundingClientRect();
        canvas.width = bodySize.width - 6;
    })

    function draw({x, y}) {
        const space = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, space.width, space.height);

        const rectSize = 100;
        ctx.fillRect(x - rectSize / 2, y - rectSize / 2, rectSize, rectSize);

        const thickness = 1;

        const clearSize = rectSize - thickness * 2;
        ctx.clearRect(x - clearSize / 2 , y - clearSize / 2, clearSize, clearSize)
    }

}

