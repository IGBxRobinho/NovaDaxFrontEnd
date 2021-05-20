import styled from 'styled-components';

export const HeaderLayout = styled.div`
 	background-color: #fff;
	padding: 24px;
	margin: auto;
	height: 100%;
	align-items: center;
	border-radius: 10px 10px 0 0;	
	
	img{
		display: block;
		float: left;
		height: 28px;
		width: 113px;
	}

	nav{
		margin: auto;
		padding: 0px;		
		width: 100%;		

		ul{	
			display: flex;
			margin-left: 43px;
			list-style: none;			
		    
			li{
				display: list-item;
				text-align: -webkit-match-parent;
				position: relative;
				padding: 6px;
				font-size: 14px;
			}
		}
	}
	`;

	export const Footer = styled.footer`
		clear: both;
		background-color: yellow;
	`;

