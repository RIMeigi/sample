onload = function() {
    {
        // Name of Sokemon
        name: ['Nazonokusa', 'ナゾノクサ'],
        // What else ...? ;)

        body:
        {
            elementId: 'sokemon',
            element: document.getElementById('sokemon'),
            motion: function () {
                anime({
                    targets: this.element,
                    targets: "#sokemon",
                    loop: true,
                    direction: 'alternate',
                    duration: 1000, //ms
                    duration: 1000,
                    easing: 'easeInOutCirc',
                    rotate: '+=5', //deg
                    loopComplete: function (anim) {}

                    rotate: '+=3',
                });
            },

            // Let's add eyes
            eyes: {
                left: {
                    elementId: 'eye-left',
                    element: document.getElementById('eye-left'),
                    blink: function () {
                        anime({
                            targets: this.element,
                            targets: ".eye1",
                            autoplay: true,
                            loop: true,
                            scaleY: {
                                value: [1, 0.1],
                                duration: 300
                            },
                            // 2000 is the max, 1000 is the min
                            delay: ( Math.floor( Math.random() * 2000 ) + 1000 ),
                            direction: 'alternate',
                            // duration: 1000, //ms
                            loop: true,
                            easing: 'easeInQuad',
                            // scaleY: '5', //deg
                            loopComplete: function (anim) {
                                // Update the blink delay
                                // 2000 is the max, 1000 is the min
                                this.delay = ( Math.floor( Math.random() * 2000 ) + 1000 );
                            }

                            scaleY: {
                                value: [1, 0.1],
                                duration: 500
                            },    
                        });
                    } // sokemon.body.eyes.left.blink()
                }, // sokemon.body.eyes.left

                right: {
                    elementId: 'eye-right',
                    element: document.getElementById('eye-right'),
                    blink: function () {
                        anime({
                            targets: this.element,
                            targets: ".eye2",
                            autoplay: true,
                            loop: true,
                            scaleY: {
                                value: [1, 0.1],
                                duration: 300
                            },
                            // 2000 is the max, 1000 is the min
                            delay: ( Math.floor( Math.random() * 2000 ) + 1000 ),
                            direction: 'alternate',
                            // duration: 1000, //ms
                            loop: true,
                            easing: 'easeInQuad',
                            // scaleY: '5', //deg
                            loopComplete: function (anim) {
                                // Update the blink delay
                                // 2000 is the max, 1000 is the min
                                this.delay = ( Math.floor( Math.random() * 2000 ) + 1000 );
                            }
                            
                            scaleY: {
                                value: [1, 0.1],
                                duration: 500
                            },   
                        });
                    } // sokemon.body.eyes.right.blink()
                } // sokemon.body.eyes.right
@ -86,15 +65,17 @@ window.onload = function() {
                    anime({
                        targets: ".mouth", // mouth-circle, mouth-square
                        autoplay: true,
                        direction:'reverse',
                        delay: 1000,
                        direction:'alternate',
                        loop: true,

                        scaleY: {
                            value: [1, 0.1],
                            duration: 300
                            value: [1, 0.5],
                            duration: 600,
                            easing: 'easeInOutSine'
                        },
                        delay : 1000,
                        loop: true,
                    })
                }
                }//sokemon.mouth.openClose

            },

@ -105,13 +86,15 @@ window.onload = function() {
                            targets: "#leg-left",
                            autoplay: true,
                            direction: "reverse",
                            loop: true,
                            scaleY: {
                                value: [1, 0.1],
                                duration: 300
                                value: [1, 0.9],
                                duration: 3000,
                                easing: 'easeInOutSine'
                            },
                            loop: true,
                            
                        })
                    }
                    }//sokemon.leg.left.swing
                },

                right:{
@ -120,33 +103,36 @@ window.onload = function() {
                            targets: "#leg-right",
                            autoplay: true,
                            direction: "reverse",
                            loop: true,

                            scaleY: {
                                value: [1, 0.1],
                                duration: 300
                                value: [1, 0.9],
                                duration: 3000,
                                easing: 'easeInOutSine'
                            },
                            loop: true,
                            
                        })
                    }
                    }//sokemon.leg.right.swing
                }
            },

            leaves:{
                swing: function (){
                    anime({
                        // targets: ".leaf", // mouth-circle, mouth-square
                        targets: "#leaf1",
                        targets: ".leaf", // mouth-circle, mouth-square
                        // targets: "#leaf1",
                        autoplay: true,
                        direction:'reverse',
                        rotate: {
                            value: '-=10deg', 
                            duration: 1800,
                            easing: 'easeInOutSine'
                          },
                        direction:'alternate',
                        delay : 1000,
                        loop: true,
                    })
                }

                        height: {
                            value: '*=1.03',
                            duration: 1800,
                            easing: 'easeInOutSine'
                        },
                    })
                }// sokemon.leaves.swing
            },// sokemon.leaves
        } // sokemon.body

@ -157,12 +143,12 @@ window.onload = function() {
    sokemon.body.eyes.left.blink();
    sokemon.body.eyes.right.blink();
    sokemon.body.mouth.openClose();
    sokemon.body.leg.left.swing();
    sokemon.body.leg.right.swing();
    //sokemon.body.leaves.swing();