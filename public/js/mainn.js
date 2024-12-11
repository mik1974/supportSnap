jQuery(function () {
  // jQuery('#frmae_slider').owlCarousel({
  //   loop: true,
  //   margin: 0,
  //   autoplay: true,
  //   smartSpeed: 1500,
  //   nav: false,
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 1
  //     },
  //     1000: {
  //       items: 1
  //     }
  //   }
  // })

  // Company Slider
  jQuery('#company_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  // Testimonial Slider
  jQuery('#testimonial_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 2500,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  // Screen Slider
  // jQuery('#screen_slider').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   smartSpeed: 2500,
  //   center: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 5
  //     }
  //   }
  // })

  // Feature Slider
  jQuery('#feature_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1400: {
        margin: 60
      }
    }
  })

  // text List Flow
  // jQuery('#text_list_flow').owlCarousel({
  //   loop: false,
  //   margin: 0,
  //   nav: false,
  //   dots: false,
  //   center: true,
  //   autoplay: false,
  //   slideTransition: 'linear',
  //   autoplayTimeout: 4000,
  //   autoplaySpeed: 4000,
  //   autoWidth: true,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 2
  //     },
  //     1440: {
  //       items: 2
  //     }
  //   }
  // })

  // text List Flow
  jQuery('#text_list_flow_download').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    autoWidth: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  // About Client Slider
  jQuery('#client_slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    autoWidth: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  // text List Flow
  jQuery('#about_slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    autoWidth: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  // Feature Slider
  jQuery('#value_slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1400: {
        margin: 60
      }
    }
  })

  // Feature Slider
  jQuery('#testimonial_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2500,
    items: 1
  })
})

// jQuery.noConflict();
jQuery(function () {
  let cardBlock = document.querySelectorAll('.task_block')
  // let topStyle = 120
  let topStyle = 120

  cardBlock.forEach((card) => {
    card.style.top = `${topStyle}px`
    topStyle += 30
  })

  // Define the task blocks

  // Get references to the blocks
  // Get references to the blocks
  // // Get references to the blocks
  // const taskBlock = document.querySelector('.task_block')
  // const taskBlock02 = document.querySelector('.task_block02')
  // const taskBlock03 = document.querySelector('.task_block03')

  // const blocks = [taskBlock, taskBlock02, taskBlock03]

  // // Function to hide or show content
  // function toggleContentVisibility(block, isVisible) {
  //   const content = block.querySelector('.content')
  //   if (isVisible) {
  //     content.classList.remove('hidden') // Show content
  //   } else {
  //     content.classList.add('hidden') // Hide content
  //   }
  // }

  // // Create the observer to detect when each card is scrolling into view
  // let observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       const currentBlock = entry.target

  //       // When a block is at least 30% visible
  //       if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
  //         // Show the current block's content
  //         toggleContentVisibility(currentBlock, true)

  //         // Hide the content of the previous blocks
  //         blocks.forEach((block, index) => {
  //           if (index < blocks.indexOf(currentBlock)) {
  //             toggleContentVisibility(block, false)
  //           }
  //         })
  //       } else {
  //         // If the current block is partially visible or less than 30% in view
  //         blocks.forEach((block, index) => {
  //           // Check if the current block is leaving the view
  //           if (entry.intersectionRatio < 0.3 && index === blocks.indexOf(currentBlock)) {
  //             const previousBlock = blocks[index - 1]
  //             // Show previous block's content only if current block is less than 30% visible
  //             if (index > 0) {
  //               toggleContentVisibility(previousBlock, true)
  //             }
  //           }
  //         })
  //       }
  //     })
  //   },
  //   {
  //     threshold: [0.3, 1.0] // Trigger at 30% visibility and fully in view
  //   }
  // )

  // // Observe the second and third blocks
  // observer.observe(taskBlock02)
  // observer.observe(taskBlock03)

  // // Initially show the first block's content
  // toggleContentVisibility(taskBlock, true)

  // //end*******//
  jQuery('.drp_btn').click(function () {
    jQuery(this).siblings('.sub_menu').slideToggle(500)
  })

  // Preloader JS

  function preloader_fade() {
    jquery('#preloader').fadeOut('slow')
  }

  // jQuery(document).ready(function () {
  // window.setTimeout(this.preloader_fade(), 500); //call fade in .5 seconds
  // }
  // )
  //window.setTimeout("preloader_fade();", 500); //call fade in .5 seconds
  // Open Sub Menu

  // All Slider Js
  // jQuery('#frmae_slider').owlCarousel({
  //   loop: true,
  //   margin: 0,
  //   autoplay: true,
  //   smartSpeed: 1500,
  //   nav: false,
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 1
  //     },
  //     1000: {
  //       items: 1
  //     }
  //   }
  // })

  // // Company Slider
  // jQuery('#company_slider').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: false,
  //   autoplay: true,
  //   smartSpeed: 1500,
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 5
  //     }
  //   }
  // })

  // // Testimonial Slider
  // jQuery('#testimonial_slider').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: false,
  //   autoplay: true,
  //   smartSpeed: 2500,
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 1
  //     },
  //     1000: {
  //       items: 1
  //     }
  //   }
  // })

  // // Screen Slider
  // jQuery('#screen_slider').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   smartSpeed: 2500,
  //   center: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 5
  //     }
  //   }
  // })

  // // Feature Slider
  // jQuery('#feature_slider').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   dots: false,
  //   autoplay: true,
  //   smartSpeed: 2500,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 2
  //     },
  //     1000: {
  //       items: 3
  //     },
  //     1400: {
  //       margin: 60
  //     }
  //   }
  // })

  // // text List Flow
  // jQuery('#text_list_flow').owlCarousel({
  //   loop: true,
  //   margin: 0,
  //   nav: false,
  //   dots: false,
  //   center: true,
  //   autoplay: true,
  //   slideTransition: 'linear',
  //   autoplayTimeout: 4000,
  //   autoplaySpeed: 4000,
  //   autoWidth: true,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   }
  // })

  // // text List Flow
  // jQuery('#text_list_flow_download').owlCarousel({
  //   loop: true,
  //   margin: 0,
  //   nav: false,
  //   dots: false,
  //   center: true,
  //   autoplay: true,
  //   slideTransition: 'linear',
  //   autoplayTimeout: 4000,
  //   autoplaySpeed: 4000,
  //   autoWidth: true,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   }
  // })

  // // About Client Slider
  // jQuery('#client_slider').owlCarousel({
  //   loop: true,
  //   margin: 30,
  //   nav: false,
  //   dots: false,
  //   center: true,
  //   autoplay: true,
  //   slideTransition: 'linear',
  //   autoplayTimeout: 4000,
  //   autoplaySpeed: 4000,
  //   autoWidth: true,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   }
  // })

  // // text List Flow
  // jQuery('#about_slider').owlCarousel({
  //   loop: true,
  //   margin: 20,
  //   nav: false,
  //   dots: false,
  //   center: true,
  //   autoplay: true,
  //   slideTransition: 'linear',
  //   autoplayTimeout: 4000,
  //   autoplaySpeed: 4000,
  //   autoWidth: true,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 4
  //     }
  //   }
  // })

  // // Feature Slider
  // jQuery('#value_slider').owlCarousel({
  //   loop: true,
  //   margin: 15,
  //   nav: true,
  //   dots: false,
  //   autoplay: true,
  //   smartSpeed: 2500,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 2
  //     },
  //     1000: {
  //       items: 3
  //     },
  //     1400: {
  //       margin: 60
  //     }
  //   }
  // })

  // // Feature Slider
  // jQuery('#testimonial_slider').owlCarousel({
  //   loop: true,
  //   margin: 0,
  //   nav: true,
  //   dots: false,
  //   autoplay: true,
  //   smartSpeed: 2500,
  //   items: 1
  // })

  // // Number Count
  let counter_find = document.querySelector('#counter')
  if (typeof counter_find != 'undefined' && counter_find != null) {
    window.addEventListener('scroll', function () {
      var element = document.querySelector('#counter')
      if (element) {
        var position = element.getBoundingClientRect()

        // checking whether fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          jQuery('.counter-value').each(function () {
            var $this = jQuery(this),
              countTo = $this.attr('data-count')
            jQuery({
              countNum: $this.text()
            }).animate(
              {
                countNum: countTo
              },

              {
                duration: 2000,
                easing: 'swing',
                step: function () {
                  $this.text(Math.floor(this.countNum))
                },
                complete: function () {
                  $this.text(this.countNum)
                  //alert('finished');
                }
              }
            )
          })
        }

        if (position.top < window.innerHeight && position.bottom >= 0) {
          //console.log('Element is partially visible in screen');
        } else {
          //console.log('Element is not visible');
          jQuery('.counter-value').each(function () {
            var $this = jQuery(this),
              countTo = 0
            jQuery({
              countNum: $this.text()
            }).animate(
              {
                countNum: countTo
              },

              {
                duration: 100,
                easing: 'swing',
                step: function () {
                  $this.text(Math.floor(this.countNum))
                },
                complete: function () {
                  $this.text(this.countNum)
                  //alert('finished');
                }
              }
            )
          })
        }
      }
    })
  }

  // --------Magnify-popup

  // jQuery(function () {
  //   jQuery('.popup-youtube').magnificPopup({
  //     disableOn: 700,
  //     type: 'iframe',
  //     mainClass: 'mfp-fade',
  //     removalDelay: 160,
  //     preloader: false,
  //     fixedContentPos: false
  //   });
  // });

  //jQuery(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  jQuery('.collapse.show').each(function () {
    $(this)
      .prev('.card-header')
      .find('.icon_faq')
      .addClass('icofont-minus')
      .removeClass('icofont-plus')
  })

  // Toggle plus minus icon on show hide of collapse element
  jQuery('.collapse')
    .on('show.bs.collapse', function () {
      jQuery(this)
        .prev('.card-header')
        .find('.icon_faq')
        .removeClass('icofont-plus')
        .addClass('icofont-minus')
    })
    .on('hide.bs.collapse', function () {
      jQuery(this)
        .prev('.card-header')
        .find('.icon_faq')
        .removeClass('icofont-minus')
        .addClass('icofont-plus')
    })

  jQuery('.collapse')
    .on('show.bs.collapse', function () {
      jQuery(this).prev('.card-header').children('h2').children('.btn').addClass('active')
    })
    .on('hide.bs.collapse', function () {
      jQuery(this).prev('.card-header').children('h2').children('.btn').removeClass('active')
    })
  //});

  // Scrool-top
  // Go Top
  //jQuery(document).ready(function () {
  jQuery('#Gotop').click(function () {
    let windiowTop = jQuery(window).scrollTop()
    if (windiowTop <= 1000) {
      jQuery('body,html').animate({ scrollTop: 0 }, 1000)
    } else if (windiowTop <= 2000 && windiowTop > 1000) {
      jQuery('body,html').animate({ scrollTop: 0 }, 2000)
    } else {
      jQuery('body,html').animate({ scrollTop: 0 }, 2500)
    }
    //})
  })

  jQuery(window).scroll(function () {
    let windiowTop = jQuery(window).scrollTop()
    // console.log(windiowTop)
    if (windiowTop > 300) {
      jQuery('#Gotop').fadeIn(500)
    } else {
      jQuery('#Gotop').fadeOut(500)
    }
  })

  //YOUTUBE VIDEO
  jQuery('.play-button').click(function (e) {
    var iframeEl = jQuery('<iframe>', { src: jQuery(this).data('url') })
    jQuery('#youtubevideo').attr('src', jQuery(this).data('url'))
  })

  jQuery('#close-video').click(function (e) {
    jQuery('#youtubevideo').attr('src', '')
  })

  jQuery(document).on('hidden.bs.modal', '#myModal', function () {
    jQuery('#youtubevideo').attr('src', '')
  })

  // Close btn on click

  //jQuery(document).ready(function () {
  jQuery('.navbar-toggler').click(function () {
    if (jQuery(this).children('span').children('.ico_menu').hasClass('icofont-navigation-menu')) {
      jQuery(this)
        .children('span')
        .children('.ico_menu')
        .removeClass('icofont-navigation-menu')
        .addClass('icofont-close')
    } else {
      jQuery(this)
        .children('span')
        .children('.ico_menu')
        .removeClass('icofont-close')
        .addClass('icofont-navigation-menu')
    }
  })
  //});

  //(function () {
  jQuery('.toggle-wrap').on('click', function () {
    jQuery(this).toggleClass('active')
    jQuery('aside').animate({ width: 'toggle' }, 200)
  })
  //})();

  jQuery('#scrollButton').click(function () {
    // Scroll down smoothly 200 pixels from the current position
    jQuery('html, body').animate({ scrollTop: jQuery(window).scrollTop() + 600 }, 800) // Adjust the speed (800ms) as needed
  })

  jQuery('#typed').typed({
    strings: ['Search Your Job Here', 'Turn Your Location On To', 'Find Jobs In Your Area.'],
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
    cursorChar: '|',
    contentType: 'html'
  })
  // INITIALIZE AOS
  AOS.init()

  // Fixed Discount Dish JS
  // jQuery(document).ready(function () {
  //   let cardBlock = document.querySelectorAll('.task_block');
  //   let topStyle = 120;

  //   cardBlock.forEach((card) => {
  //     card.style.top = `jQuery{topStyle}px`;
  //     topStyle += 30;
  //   })

  // }
  // );

  // Scroll Down Window
  //jQuery(document).ready(function () {
  // Attach a click event handler to the button
  // jQuery('#scrollButton').click(function () {
  //   // Scroll down smoothly 200 pixels from the current position
  //   jQuery('html, body').animate({ scrollTop: jQuery(window).scrollTop() + 600 }, 800); // Adjust the speed (800ms) as needed
  // });
  //});
})
//});
