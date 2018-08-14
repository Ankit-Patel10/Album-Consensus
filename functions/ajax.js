var input = document.getElementById("search");
        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if(event.keyCode === 13) {
                document.getElementById("searchbutton").click();
            }
        });

        function search() {
            var x = $("search").val();

            // Fantano Search
            $.ajax({
                type: 'POST',
                url: window.location.protocol + '//' + window.location.host + '/getfantanoscore',
                data: {
                    album: $("#search").val(),
                },
                dataType: "json",
                success: function(data) {
                    console.log(data);
                    document.getElementById("fantanoAlbumScore").innerHTML = data;
                    if(data == 1 || data == 2 || data == 3) {
                        changeBackground('red');
                    }
                    if(data == 4 || data == 5 || data == 6) {
                        changeBackground('yellow');
                    }
                    if(data == 7 || data == 8 || data == 9) {
                        changeBackground('green');
                    }
                    if(data == 10) {
                        changeBackground('purple');
                    }
                },
                error: function(error) {
                    console.log(error.responseText);
                    document.getElementById("fantanoAlbumScore").innerHTML = error.responseText;
                    if(error.responseText == 'Can\'t find album') {
                        changeBackground('white');
                    }
                    if(error.responseText == 'NOT GOOD') {
                        changeBackground('red');
                    }
                }
            });

            $.ajax({
                type: 'POST',
                url: window.location.protocol + '//' + window.location.host + '/getpitchforkscore',
                data: {
                    album: $("#search").val(),
                },
                dataType: "json",
                success: function(data) {
                    console.log(data.score);
                    document.getElementById("pitchforkAlbumScore").innerHTML = data.score;
                },
                error: function(error) {
                    console.log(error.responseText);
                    document.getElementById("pitchforkAlbumScore").innerHTML = error.responseText;
                    if(error.responseText == 'Can\'t find album') {
                        changeBackground('white');
                    }
                    if(error.responseText == 'NOT GOOD') {
                        changeBackground('red');
                    }
                }
            });

            // Metacritic POST
            $.ajax({
                type: 'POST',
                url: window.location.protocol + '//' + window.location.host + '/getmetacriticscore',
                data: {
                    album: $("#search").val(),
                },
                dataType: "json",
                success: function(data) {
                    console.log(data.metaScore);
                
                    document.getElementById("metacriticAlbumScore").innerHTML = data.metaScore;
                    document.getElementById("userAlbumScore").innerHTML = data.userScore
                },
                error: function(error) {
                    console.log(error.responseText);
                    document.getElementById("metacriticAlbumScore").innerHTML = error.responseText;
                    if(error.responseText == 'Can\'t find album') {
                        changeBackground('white');
                    }
                    if(error.responseText == 'NOT GOOD') {
                        changeBackground('red');
                    }
                }
            });


        }

        function changeBackground(color) {
            document.body.style.background = color;
        }