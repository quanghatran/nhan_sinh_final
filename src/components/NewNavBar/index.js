import { Container } from "@material-ui/core";
import "./NewNavBar.scss";
import rotateLogo from "../../images/shutterstock_725168740.png";

const NewNavBar = () => {
	return (
		<div className='NewNavBar'>
			<Container>
				<ul className='navList'>
					<li className='navItem'>
						<a href='#' className='navNav'>
							Trang Chủ
						</a>
					</li>
					<li className='navItem'>
						<a href='#' className='navNav'>
							Giới Thiệu
						</a>
					</li>
					<li className='navItem'>
						<a href='#' className='navNav'>
							Tra Cứu
						</a>
					</li>
					<li className='navItem'>
						<a href='#' className='navNav'>
							Ý Nghĩa Con Số
						</a>
					</li>
					<li className='navItem navLogo'>
						<a href='#' className='navNav'>
							<img src={rotateLogo} alt='logoRotate' className='logoImg' />
						</a>
					</li>
					<li className='navItem'>
						<a href='#' className='navNav'>
							Trang Chủ
						</a>
					</li>
					<li className='navItem'>
						<a href='#' className='navNav'>
							Giới Thiệu
						</a>
					</li>
					<li className='navItem'>
						<a href='#' className='navNav'>
							Tra Cứu
						</a>
					</li>
					<li className='navItem'>
						<a href='#' className='navNav'>
							Ý Nghĩa Con Số
						</a>
					</li>
				</ul>
			</Container>
		</div>
	);
};

export default NewNavBar;
