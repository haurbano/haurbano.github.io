import React from 'react';

import profileImage from '../images/profile.jpeg'

function HomeBanner() {
    return (
        <section class="home_banner_area">
           	<div class="container box_1620">
           		<div class="banner_inner d-flex align-items-center">
					<div class="banner_content">
						<div class="media">
							<div class="d-flex">
								<img class="img-fluid picture mx-auto" src={profileImage} alt=""></img>
							</div>
							<div class="media-body">
								<div class="personal_text">
									<h6>Hello Everybody, i am</h6>
									<h3>Donald McKinney</h3>
									<h4>Junior UI/UX Developer</h4>
									<p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
									<ul class="list basic_info">
										<li><a href="#"><i class="lnr lnr-calendar-full"></i> 31st December, 1992</a></li>
										<li><a href="#"><i class="lnr lnr-phone-handset"></i> 44 (012) 6954 783</a></li>
										<li><a href="#"><i class="lnr lnr-envelope"></i> businessplan@donald</a></li>
										<li><a href="#"><i class="lnr lnr-home"></i> Santa monica bullevard</a></li>
									</ul>
									<ul class="list personal_social">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
    );
}

export default HomeBanner