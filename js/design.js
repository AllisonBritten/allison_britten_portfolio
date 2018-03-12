new WOW().init();

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["HTML5", "CSS3", "Javascript", "jQuery", "Node.js", "Express.js"],
        datasets: [{
            label: 'Skill Level: 0-8 Beginner, 8-15 Intermediate, 15-20 Advanced',
            data: [19, 18, 18, 15, 9, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]

    },
    options: {
        scales: {
            xAxes: 
            [{
                ticks: {
                    display:true,
                    min: 0
                }
            }]
            
        }

    }
});

$("#portImage").on("hover", function(){
    $(this).toggleClass()
})