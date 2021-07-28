import { Button, Grid, Hidden, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import TitleSection from "../../../components/titleSection/TitleSection";
import "./MeaningNumbers.scss";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiGrid-root": {
			margin: "8px 0",
		},
	},

	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

const listMeaning = [
	{
		id: 1,
		nameBtn: "Ý nghĩa số 1",
		className: "buttonMeaning",
		panel: "panel1",
		contentRendered:
			"<p>Độc lập, mạnh mẽ, tự tin, quyết t&acirc;m chiến thắng mọi &ldquo;cuộc chơi&rdquo; l&agrave; những t&iacute;nh từ d&agrave;nh cho bạn. Người kh&aacute;c nh&igrave;n bạn với sự ngưỡng mộ về &yacute; ch&iacute; ki&ecirc;n định, ki&ecirc;n nhẫn đ&aacute;ng nể khi bạn đ&atilde; bắt tay thực hiện mục ti&ecirc;u. T&agrave;i thao lược lẫn sắp xếp, tổ chức chu to&agrave;n lu&ocirc;n l&agrave; nguy&ecirc;n liệu khiến cho bức tranh cuộc đời bạn nổi bật. Bạn l&agrave; ứng cử vi&ecirc;n s&aacute;ng gi&aacute; trong m&ocirc;i trường tập thể v&igrave; kh&iacute; chất ti&ecirc;n phong, liều lĩnh, can đảm. Bản năng ưa l&atilde;nh đạo n&ecirc;n biến ước mơ th&agrave;nh hiện thực h&oacute;a ở mọi độ tuổi hay ho&agrave;n cảnh. Bạn v&ocirc; thức hay hữu &yacute; mang d&ograve;ng năng lượng truyền cảm hứng v&agrave; g&acirc;y ảnh hưởng l&ecirc;n những người xung quanh bạn. Với những đặc điểm nổi trội bạn n&ecirc;n lắng nghe nhiều hơn, đ&ocirc;i khi quyết đo&aacute;n v&agrave; độc lập, giảm bớt &aacute;p lực l&ecirc;n những người xung quanh bạn bạn sẽ l&agrave; người l&atilde;nh đạo đủ t&acirc;m v&agrave; tầm m&agrave; mọi người nể phục v&agrave; ngưỡng mộ.</p> <p>Bạn sẽ ph&aacute;t huy hết nội lực v&agrave; sức mạnh b&ecirc;n trong khi bạn được trở th&agrave;nh người vượt l&ecirc;n ph&iacute;a trước &ldquo;cầm l&aacute;i&rdquo; cho đội ngũ của m&igrave;nh.</p>",
	},
	{
		id: 2,
		nameBtn: "Ý nghĩa số 2",
		className: "buttonMeaning",
		panel: "panel2",
		contentRendered:
			"<p>Được v&iacute; như &ldquo;Sứ giả của h&ograve;a b&igrave;nh nh&acirc;n loại&rdquo;. Bạn ấm &aacute;p, vị tha, th&iacute;ch nu&ocirc;ng chiều người kh&aacute;c. Vũ trụ cho bạn n&eacute;t t&iacute;nh t&igrave;nh mềm mỏng, nh&atilde; nhặn, lịch thiệp, dịu d&agrave;ng. Phong th&aacute;i &ocirc;n h&ograve;a, điềm đạm l&agrave; trực quan khi tiếp x&uacute;c với bạn. Biết lắng nghe, đồng cảm, thấu hiểu, hỗ trợ mọi người l&agrave; ưu điểm ri&ecirc;ng biệt trong con người bạn. Bạn ưa hợp t&aacute;c, đ&oacute;ng vai tr&ograve; h&ograve;a giải hay li&ecirc;n kết mọi người lại. Sự ch&acirc;n th&agrave;nh của bạn lay động l&ograve;ng người. Cũng ch&iacute;nh v&igrave; sự tinh tế đ&oacute;, bạn trong c&ocirc;ng việc cũng l&agrave; người ch&uacute; &yacute; đến tiểu tiết, tỉ mỉ v&agrave; thận trọng, đầu &oacute;c linh hoạt, tư duy th&iacute;ch nghi mạnh mẽ với sự thay đổi, dễ d&agrave;ng tiếp nhận c&aacute;i mới, quan điểm mới, hệ thống gi&aacute; trị mới, m&ocirc;i trường mới, c&ocirc;ng việc mới, đồng nghiệp mới. N&oacute;i bạn giống một vị trợ l&yacute; hay thư k&iacute; tuyệt vời v&agrave; mẫn c&aacute;n kh&ocirc;ng ngoa ch&uacute;t n&agrave;o.</p><p>Bạn ch&acirc;n th&agrave;nh, trung th&agrave;nh, uyển chuyển v&agrave; linh hoạt. Bạn hạn chế phải thay đổi m&ocirc;i trường, c&ocirc;ng việc, bạn b&egrave;, hay đối t&aacute;c. Bạn duy tr&igrave; những thứ gắn liền với bản th&acirc;n trong khoảng thời gian d&agrave;i.</p>",
	},
	{
		id: 3,
		nameBtn: "Ý nghĩa số 3",
		className: "buttonMeaning",
		panel: "panel3",
		contentRendered:
			"<p>Đến với Tr&aacute;i đất để mang đến những th&ocirc;ng điệp t&iacute;ch cực v&agrave; đẹp đẽ c&oacute; lẽ l&agrave; sứ mệnh của bạn. Cuộc đời của bạn nhiều m&agrave;u sắc v&agrave; s&ocirc;i động. Thấy bạn, l&agrave; thấy hiện hữu h&igrave;nh ảnh của con người h&agrave;i hước, nhiệt t&igrave;nh. Bầu kh&ocirc;ng kh&iacute; nơi bạn xuất hiện lu&ocirc;n ngập tr&agrave;n tiếng cười trong &aacute;nh mắt ngưỡng mộ của nhiều người. Th&ocirc;ng minh v&agrave; hoạt ng&ocirc;n, cởi mở v&agrave; thẳng thắn, t&iacute;ch cực v&agrave; y&ecirc;u người l&agrave; phẩm chất tốt đẹp nơi bạn. </p><p>Bạn như một vầng trăng giữa bầu trời đ&ecirc;m vực dậy linh hồn vạn vật. Năng lượng t&iacute;ch cực tỏa ra từ bạn mang đến sự lạc quan, vui vẻ, tự do cho người kh&aacute;c. Nếu đứng tr&ecirc;n s&acirc;n khấu, hội trường, bạn sẽ l&agrave; nh&acirc;n vật thu h&uacute;t mọi &aacute;nh nh&igrave;n v&agrave; chiếm được sự y&ecirc;u thương của kh&aacute;n giả! Bạn sinh ra để chia sẻ những th&ocirc;ng điệp t&iacute;ch cực, những triết l&yacute; m&agrave; bạn biết đến mọi người v&agrave; bạn sẽ &ldquo;bừng s&aacute;ng&rdquo; khi li&ecirc;n tục l&agrave;m điều ấy.</p>",
	},
	{
		id: 4,
		nameBtn: "Ý nghĩa số 4",
		className: "buttonMeaning",
		panel: "panel4",
		contentRendered:
			"<p>Giống với mẫu người nh&oacute;m C trong trắc nghiệm D.I.S.C, bạn cầu to&agrave;n, chỉn chu, ưa những c&ocirc;ng việc, m&ocirc;i trường c&oacute; trật tự, c&oacute; quy tr&igrave;nh, c&oacute; nguy&ecirc;n tắc, khu&ocirc;n mẫu nhất định. Bạn c&oacute; khuynh hướng t&ocirc;n trọng những g&igrave; thuộc về truyền thống, m&ocirc; phạm. Nếu l&agrave; một trưởng nh&oacute;m, hay trưởng một tập thể, bạn sẽ rất dập khu&ocirc;n, th&iacute;ch tạo ra những thứ ch&iacute;nh x&aacute;c, th&aacute;i độ kỉ luật tuyệt đối.</p><p> Đ&oacute; l&agrave; l&yacute; do khi giao việc cho bạn, bố mẹ, bạn b&egrave;, đồng nghiệp, hay sếp ho&agrave;n to&agrave;n y&ecirc;n t&acirc;m. Bạn giỏi trong việc l&agrave;m việc với quy chuẩn, quy tr&igrave;nh, thiết kế hay x&acirc;y dựng ra một c&aacute;i g&igrave; đ&oacute;. Bạn l&agrave; người thực tế, vật chất, th&iacute;ch trải nghiệm chứ &iacute;t khi n&agrave;o l&agrave; ngồi một chỗ v&agrave; tưởng tượng. Do vậy, bạn rất kh&oacute; tiếp cận hay thẩm thấu được tinh tế những lĩnh vực về tinh thần như t&acirc;m linh, t&ocirc;n gi&aacute;o, t&igrave;nh cảm. Bạn th&iacute;ch v&agrave; lu&ocirc;n lựa chọn những thứ mang t&iacute;nh chất ổn định, l&acirc;u d&agrave;i. Điều n&agrave;y thể hiện r&otilde; n&eacute;t khi bạn mua đồ, lựa chọn c&ocirc;ng việc, vv..vvv...Khả năng đưa mọi thứ hỗn loạn về thế c&acirc;n bằng l&agrave; điều bạn l&agrave;m rất tốt!</p>",
	},
	{
		id: 5,
		nameBtn: "Ý nghĩa số 5",
		className: "buttonMeaning",
		panel: "panel5",
		contentRendered:
			"<p>Bạn l&agrave; một h&igrave;nh mẫu đại diện cho năng lượng s&aacute;ng tạo v&agrave; mới mẻ kh&ocirc;ng ngừng. Cuộc sống của bạn l&agrave; những biến cố, bất ngờ, thay đổi li&ecirc;n tục xảy đến trong gia đ&igrave;nh, bạn b&egrave; hay c&aacute;c mối quan hệ t&igrave;nh cảm, c&ocirc;ng việc. N&oacute; đ&ograve;i hỏi bạn phải linh hoạt th&iacute;ch nghi d&ugrave; muốn hay kh&ocirc;ng. T&iacute;nh t&igrave;nh bạn ưa th&iacute;ch tự do, coi tự do l&agrave; ch&acirc;n &aacute;i của đời m&igrave;nh. Bạn đa m&agrave;u sắc c&aacute; nh&acirc;n, biến đổi linh hoạt. Ở b&ecirc;n trong bạn lu&ocirc;n c&oacute; một nguồn cảm hứng mạnh mẽ với việc s&aacute;ng tạo, thay cũ đổi mới. Bạn mang một tinh thần kh&ocirc;ng sợ mạo hiểm, sẵn s&agrave;ng ph&aacute; vỡ hệ thống cũ, m&ocirc;i trường cũ, lĩnh vực cũ, con đường cũ, t&ocirc;n gi&aacute;o cũ, gi&aacute; trị niềm tin cũ, quan điểm cũ để thiết lập c&aacute;i mới.</p><p>&ldquo;Truyền thống&rdquo; kh&ocirc;ng phải thứ bạn h&agrave;o hứng. Bạn thường đột ph&aacute;, hướng tới việc đi t&igrave;m những hạt ngọc mới. Cảm x&uacute;c của bạn s&acirc;u sắc v&agrave; tư duy nghệ thuật cao. Bạn kh&ocirc;ng th&iacute;ch bị tr&oacute;i buộc, g&ograve; b&oacute;, &aacute;p đặt. Nếu ai đ&oacute; cố gắng l&agrave;m điều đ&oacute; với bạn, họ sẽ nhận được th&aacute;i độ phản kh&aacute;ng mạnh mẽ từ bạn.&nbsp;</p>",
	},
	{
		id: 6,
		nameBtn: "Ý nghĩa số 6",
		className: "buttonMeaning",
		panel: "panel6",
		contentRendered:
			"<p>Bạn l&agrave; mẫu người của gia đ&igrave;nh. Cả cuộc đời bạn sẽ phải học rất nhiều b&agrave;i học t&igrave;nh cảm phục vụ cho việc l&atilde;nh đạo một gia đ&igrave;nh, x&acirc;y dựng một gia đ&igrave;nh tốt. Bạn vốn dĩ y&ecirc;u h&ograve;a b&igrave;nh, c&oacute; tấm l&ograve;ng nh&acirc;n &aacute;i, gh&eacute;t sự bất c&ocirc;ng, cưỡng &eacute;p v&ocirc; l&yacute;. Ở kh&iacute;a cạnh X&atilde; hội, bạn mang tr&aacute;ch nhiệm cống hiến gi&aacute; trị về tinh thần cho nh&acirc;n loại, cộng đồng, tập thể. Điều đ&oacute; đ&uacute;ng bởi v&igrave; bạn chứa trong tr&aacute;i tim t&igrave;nh y&ecirc;u thương s&acirc;u sắc d&agrave;nh cho con người nhất l&agrave; gia đ&igrave;nh của ch&iacute;nh m&igrave;nh. Bạn kh&ocirc;ng &iacute;ch kỉ, m&agrave; sẵn s&agrave;ng g&aacute;nh v&aacute;c v&agrave; hi sinh lợi &iacute;ch c&aacute; nh&acirc;n để phục vụ cho gia đ&igrave;nh, tập thể. Sức s&aacute;ng tạo tột bậc v&agrave; xuất ch&uacute;ng của bạn được bộc lộ khi bạn c&oacute; một tinh thần khỏe mạnh v&agrave; sống trong m&ocirc;i trường l&agrave;nh mạnh, y&ecirc;u thương nhau, gi&uacute;p đỡ nhau. </p>",
	},
	{
		id: 7,
		nameBtn: "Ý nghĩa số 7",
		className: "buttonMeaning",
		panel: "panel7",
		contentRendered:
			"<p>Huyền b&iacute; v&agrave; th&ocirc;ng tuệ. Cuộc sống mang đến cho bạn tr&iacute; tuệ hơn người th&ocirc;ng tố chất c&oacute; sẵn v&agrave; trải nghiệm c&aacute; nh&acirc;n phong ph&uacute;. Bạn s&acirc;u sắc, th&iacute;ch chi&ecirc;m nghiệm, ưa thu m&igrave;nh, ưa một m&igrave;nh, th&iacute;ch l&agrave;m việc với ch&iacute;nh bản th&acirc;n để r&uacute;t ra triết l&yacute;, kinh nghiệm, quy luật mọi thứ bạn quan s&aacute;t v&agrave; va chạm phải. V&igrave; thế n&ecirc;n đ&ocirc;i khi mọi người cảm thấy bạn kh&oacute; gần. Bạn c&oacute; sợi d&acirc;y kết nối với t&acirc;m linh kh&aacute; tốt, tr&iacute; tuệ nội t&acirc;m v&agrave; t&acirc;m linh bạn đều sở hữu. Kh&oacute; ai c&oacute; thể qua mặt bạn do bạn mang một trực gi&aacute;c tốt. Bạn th&iacute;ch đi s&acirc;u ph&acirc;n t&iacute;ch bản chất vấn đề, nh&igrave;n thấu sự thật. &Oacute;c logic v&agrave; tư duy khoa học biến bạn th&agrave;nh một người th&ocirc;ng th&aacute;i. Mọi người t&igrave;m đến bạn như một cố vấn, một người dẫn đường. Bạn được cuộc đời đ&agrave;o tạo để trở th&agrave;nh bị Thầy của nh&acirc;n loại. Bạn th&iacute;ch đem bản th&acirc;n ra trải nghiệm n&ecirc;n đ&ocirc;i khi bạn phải trả gi&aacute; v&igrave; điều đ&oacute; nhưng ngược lại bạn c&oacute; được b&agrave;i học cho ri&ecirc;ng m&igrave;nh. </p><p>Số 7 c&oacute; một sự kết nối với thế giới t&acirc;m linh kh&aacute; chặt chẽ. Do đ&oacute;, tầm nh&igrave;n, tầm kh&ocirc;ng gian được trải nghiệm của bạn rộng hơn người kh&aacute;c rất nhiều. Hiển nhi&ecirc;n rồi, nhiều khả năng, nhiều t&agrave;i năng th&igrave; tr&aacute;ch nhiệm đối với cộng đồng c&agrave;ng lớn lao.</p>",
	},
	{
		id: 8,
		nameBtn: "Ý nghĩa số 8",
		className: "buttonMeaning",
		panel: "panel8",
		contentRendered:
			"<p>Bạn đại điện cho sắc đẹp v&agrave; tiền bạc. Hướng đến tham vọng, g&acirc;y dựng quyền lực l&agrave; kim chỉ nam của bạn. Bạn c&oacute; thể cống hiến cho X&atilde; hội c&aacute;ch l&agrave;m đẹp, quản l&yacute; t&agrave;i ch&iacute;nh, quản l&yacute; kinh doanh, quản trị doanh nghiệp. Bạn c&oacute; tiền v&agrave; th&iacute;ch d&ugrave;ng tiền để thể hiện quyền lực của bản th&acirc;n. Thịnh vượng v&agrave; sắc đẹp l&agrave; những thứ bạn c&oacute; sau những nỗ lực kh&ocirc;ng ngừng nghỉ về cải thiện chiến lược kinh doanh, tri thức t&agrave;i ch&iacute;nh, tinh thần chăm s&oacute;c bản th&acirc;n. Tầm ảnh hưởng của bạn chỉ được n&acirc;ng cao khi bạn gi&uacute;p người kh&aacute;c gia tăng gi&aacute; trị v&agrave; tầm ảnh hưởng của họ. Đem của cải, gi&aacute; trị bạn c&oacute; để cống hiến cho cộng đồng, bạn c&agrave;ng tỏa s&aacute;ng v&agrave; gặp nhiều may mắn.</p>",
	},
	{
		id: 9,
		nameBtn: "Ý nghĩa số 9",
		className: "buttonMeaning",
		panel: "panel9",
		contentRendered:
			"<p>Năng lượng của l&ograve;ng từ bi v&agrave; y&ecirc;u thương tu&ocirc;n tr&agrave;o mạnh trong bạn. Bạn trải qua c&aacute;c đau đớn v&agrave; đắng cay trong cuộc sống, bị lừa gạt, bị lừa dối để hiểu được nh&acirc;n quả. Song, bạn l&agrave; một người lấy h&agrave;o ohosng để thiện đ&atilde;i ch&uacute;ng sinh, lấy rộng lượng để đối đ&atilde;i lỗi lầm người kh&aacute;c g&acirc;y ra cho bạn. Trải qua tất cả, bạn vẫn bao dung v&agrave; tha thứ. Sự bao dung v&agrave; tha thứ lu&ocirc;n lớn dần theo thời gian, tăng l&ecirc;n mức độ ng&agrave;y một cao. Hướng thượng l&agrave; lẽ sống của bạn. Bạn cho đi kh&ocirc;ng toan t&iacute;nh, kh&ocirc;ng vụ lợi, kh&ocirc;ng mong cầu đ&aacute;p lại. Tr&aacute;i tim của bạn thuần khiết v&agrave; bao la. N&oacute; &ocirc;m l&yacute; tưởng vĩ đại v&agrave; c&oacute; khả năng hiện thực h&oacute;a những ho&agrave;i b&atilde;o ấy. </p><p>D&ugrave; ở trong địa hạt hay lĩnh vực n&agrave;o, gi&aacute; trị bạn ch&uacute; &yacute; đến vẫn kh&ocirc;ng nằm ngo&agrave;i gi&aacute; trị nh&acirc;n văn v&agrave; gi&aacute; trị nh&acirc;n đạo. Bạn c&oacute; khiếu nghệ thuật. Tuy nhi&ecirc;n quản l&yacute; t&agrave;i ch&iacute;nh lại kh&ocirc;ng phải điểm mạnh của bạn v&igrave; bạn kh&ocirc;ng hay so đo v&agrave; kh&ocirc;ng giỏi về tiểu tiết. Bạn vị tha như một người mẹ của nh&acirc;n loại. Đến với bạn, mọi người nhận được sự gi&uacute;p đỡ v&ocirc; điều kiện, sự n&acirc;ng đỡ v&agrave; dẫn dắt. Qu&yacute; nh&acirc;n v&agrave; tiểu nh&acirc;n lu&ocirc;n song h&agrave;nh trong cuộc đời của bạn. Điều đ&oacute; l&agrave; một sự may mắn. Tất cả sinh ra để d&agrave;nh cho bạn chứ kh&ocirc;ng chống lại bạn. Đi qua n&oacute; rồi, bạn ng&agrave;y c&agrave;ng trưởng th&agrave;nh v&agrave; am hiểu cuộc sống hơn.</p>",
	},
	{
		id: 10,
		nameBtn: "Ý nghĩa số 11",
		className: "buttonMeaning",
		panel: "panel10",
		contentRendered:
			"<p>Bạn l&agrave; một người c&oacute; kết nối t&acirc;m linh v&agrave; tr&iacute; tuệ t&acirc;m linh mạnh mẽ. Bạn c&oacute; khả năng to lớn về việc truyền tải th&ocirc;ng điệp của c&aacute;c thế lực si&ecirc;u h&igrave;nh, chi&ecirc;m nghiệm dự đo&aacute;n một số sự kiện quan trọng. Gi&aacute;c quan nhạy cảm v&agrave; ph&aacute;t triển mạnh mẽ. Bạn nh&acirc;n hậu, vị tha, th&iacute;ch mơ mộng v&agrave; hứng th&uacute; với những g&igrave; b&iacute; ẩn. Bạn c&oacute; thể đạt được sự vi&ecirc;n m&atilde;n trong khi lấy hạnh ph&uacute;c người kh&aacute;c l&agrave;m mục ti&ecirc;u cuộc đời. Sự thịnh vượng, ph&uacute;c thọ, danh vọng hiển nhi&ecirc;n thuộc về bạn khi bạn d&ugrave;ng những khả năng của m&igrave;nh để gi&uacute;p đời, gi&uacute;p người, n&acirc;ng tầm bản th&acirc;n bằng c&aacute;ch gi&uacute;p người kh&aacute;c n&acirc;ng tầm ch&iacute;nh họ. Bạn l&agrave; bậc thầy của thế gian khi bạn đem mọi điều điều đẽ soi tỏ giữa thế gian. </p><p>Sự truyền cảm hứng, tinh tế, nhạy cảm v&agrave; c&oacute; nhiều t&iacute;nh nữ l&agrave; năng lượng tồn tại trong bạn.</p>",
	},
	{
		id: 11,
		nameBtn: "Ý nghĩa số 22",
		className: "buttonMeaning",
		panel: "panel11",
		contentRendered:
			"<p>Đ&acirc;y l&agrave; dạng năng lượng khuyếch đại của sự kỷ luật, nguy&ecirc;n tắc, quy tr&igrave;nh, x&acirc;y dựng, thiết lập. Bạn sống theo chuẩn mực, t&ocirc;n trọng c&aacute;c gi&aacute; trị truyền thống. Bạn để &yacute; đến c&aacute;c vấn đề an sinh x&atilde; hội. D&ugrave;ng t&agrave;i năng của m&igrave;nh để gi&uacute;p đỡ cộng đồng, thiết lập một đế chế ri&ecirc;ng của m&igrave;nh. L&yacute; tưởng vĩ đại, khả năng thực hiện những l&yacute; tưởng vĩ đại v&agrave; kiểm so&aacute;t kết quả l&agrave; những g&igrave; m&ocirc; tả con người bạn.</p><p>Bạn c&oacute; khả năng biến bất cứ thứ g&igrave; th&agrave;nh dạng vật chất ngay cả khi l&uacute;c đầu n&oacute; đang hiện hữu ở mặt tinh thần. Bạn như một nh&agrave; Kiến tr&uacute;c sư t&agrave;i ba, kiến tạo mọi thứ từ những bước nhỏ nhất. Tiềm năng v&ocirc; hạn của bạn khiến thế giới thay đổi v&igrave; bạn. Thủ tướng Singapore L&yacute; Quang Diệu l&agrave; v&iacute; dụ điển h&igrave;nh để bạn học tập, noi gương.</p>",
	},
];

const MeaningNumbers = () => {
	const classes = useStyles();

	const [contentRight, setContentRight] = useState(
		"<p>Độc lập, mạnh mẽ, tự tin, quyết t&acirc;m chiến thắng mọi &ldquo;cuộc chơi&rdquo; l&agrave; những t&iacute;nh từ d&agrave;nh cho bạn. Người kh&aacute;c nh&igrave;n bạn với sự ngưỡng mộ về &yacute; ch&iacute; ki&ecirc;n định, ki&ecirc;n nhẫn đ&aacute;ng nể khi bạn đ&atilde; bắt tay thực hiện mục ti&ecirc;u. T&agrave;i thao lược lẫn sắp xếp, tổ chức chu to&agrave;n lu&ocirc;n l&agrave; nguy&ecirc;n liệu khiến cho bức tranh cuộc đời bạn nổi bật. Bạn l&agrave; ứng cử vi&ecirc;n s&aacute;ng gi&aacute; trong m&ocirc;i trường tập thể v&igrave; kh&iacute; chất ti&ecirc;n phong, liều lĩnh, can đảm. Bản năng ưa l&atilde;nh đạo n&ecirc;n biến ước mơ th&agrave;nh hiện thực h&oacute;a ở mọi độ tuổi hay ho&agrave;n cảnh. Bạn v&ocirc; thức hay hữu &yacute; mang d&ograve;ng năng lượng truyền cảm hứng v&agrave; g&acirc;y ảnh hưởng l&ecirc;n những người xung quanh bạn. Với những đặc điểm nổi trội bạn n&ecirc;n lắng nghe nhiều hơn, đ&ocirc;i khi quyết đo&aacute;n v&agrave; độc lập, giảm bớt &aacute;p lực l&ecirc;n những người xung quanh bạn bạn sẽ l&agrave; người l&atilde;nh đạo đủ t&acirc;m v&agrave; tầm m&agrave; mọi người nể phục v&agrave; ngưỡng mộ.</p> <p>Bạn sẽ ph&aacute;t huy hết nội lực v&agrave; sức mạnh b&ecirc;n trong khi bạn được trở th&agrave;nh người vượt l&ecirc;n ph&iacute;a trước &ldquo;cầm l&aacute;i&rdquo; cho đội ngũ của m&igrave;nh.</p>"
	);
	const [clickedID, setClickedID] = useState(1);

	function handleClick(id, contentRendered) {
		setContentRight(contentRendered);
		setClickedID(id);
	}

	const [expanded, setExpanded] = React.useState("panel1");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div id='meaningsBlock' className='meaningsBlock'>
			<div className='block meaningsBlockWrapper'>
				<div className='container-fluid'>
					<TitleSection titleHeader='ý nghĩa của các con số' />

					<div className='meaningContent'>
						<Hidden smDown>
							<Grid container spacing={3}>
								<Grid container item xs={6} className={classes.root}>
									{listMeaning.map((meaning) => (
										<Grid item xs={12} key={meaning.id}>
											<Button
												id={meaning.id}
												fullWidth
												variant={
													meaning.id === clickedID ? "contained" : "text"
												}
												size='large'
												color='secondary'
												className='buttonMeaning'
												onClick={() =>
													handleClick(meaning.id, meaning.contentRendered)
												}
											>
												<Typography variant='body1' style={{ color: "#fff" }}>
													{meaning.nameBtn}
												</Typography>
											</Button>
										</Grid>
									))}
								</Grid>
								<Grid item xs={6} style={{ marginTop: "8px" }}>
									<div
										className='meaningRight'
										dangerouslySetInnerHTML={{ __html: contentRight }}
									></div>
								</Grid>
							</Grid>
						</Hidden>
						<Hidden mdUp>
							{listMeaning.map((meaning, index) => (
								<Accordion
									expanded={expanded === meaning.panel}
									onChange={handleChange(`${meaning.panel}`)}
									key={index}
								>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls='panel1a-content'
										id='panel1a-header'
									>
										<Typography
											variant='button'
											component='h3'
											color='secondary'
										>
											{meaning.nameBtn}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography variant='subtitle2' color='textSecondary'>
											<div
												className='meaningBottom'
												dangerouslySetInnerHTML={{
													__html: `${meaning.contentRendered}`,
												}}
											></div>
										</Typography>
									</AccordionDetails>
								</Accordion>
							))}
						</Hidden>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MeaningNumbers;
