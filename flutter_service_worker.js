'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8ad09951916cfec82fbd167ade3c9027",
"version.json": "7a32cb6c228ab1f813bf8b18ece4413a",
"index.html": "a9ac74c2dd39b7b16160f45ec5ba2f79",
"/": "a9ac74c2dd39b7b16160f45ec5ba2f79",
"js/payment.js": "1efb71c9c6755fa226a1d3d3e88ddfd3",
"main.dart.js": "34a87d68ab627ee2226db60b5be81c65",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2d3331cd08d008a8b93c9135bda2bdb",
"assets/common_ui/assets/icici_logo.png": "c49615c1b75cd66eb7d38d7903acfb8e",
"assets/common_ui/assets/kyc_img1.png": "a604c7adfbcba76b3d894d6998106821",
"assets/common_ui/assets/kyc_img2.png": "2bc8874e388a1f2350f0528bec27c7a5",
"assets/common_ui/assets/pan_card_img.png": "0262473f6164c28ed8ddf27500b72baa",
"assets/common_ui/assets/query_call_icon.png": "d5e44ea768c4d7a06121794e9ca92808",
"assets/common_ui/assets/settle_icon.png": "19e78e463a5fc787e40ad9567d1358a0",
"assets/common_ui/assets/home_renewal_si_icon.png": "85bff398412cb15328c8194216feff65",
"assets/common_ui/assets/instagram_icon.png": "4a43bd7095817da96481e510aa84cebf",
"assets/common_ui/assets/youtube_icon.png": "e6a9d5f8bfbd6f7e561ce04c7bc02948",
"assets/common_ui/assets/aadhar_card.png": "fcbc83a6885069ee6c2664b212b895fd",
"assets/common_ui/assets/linkedin_icon.png": "3cc272ba2e334f997d2e89ce51743759",
"assets/common_ui/assets/digicert.png": "784eb4be1a61e8707bebd80b00cb8008",
"assets/common_ui/assets/app_store_download.png": "c06c266be52256c4aae25b4ec78cf3ff",
"assets/common_ui/assets/superbrands.png": "fd69e69ff68b08ccca8593553e553fb2",
"assets/common_ui/assets/icici_logo2.png": "d37846d738ac68ba419f79768a5f3d2a",
"assets/common_ui/assets/survey_icon.png": "7508ec229e28c4ae44fd79e0fdd5a5e5",
"assets/common_ui/assets/iltakecare_mobile_view.png": "3092cc30de6984add86b2c958d1314cb",
"assets/common_ui/assets/call_icon.png": "20dc38e6265af4278a7d06bc13a3bae1",
"assets/common_ui/assets/intimate_icon.png": "941a3f7873a568d18600a3ac85d0b964",
"assets/common_ui/assets/play_store_download.png": "bf83fd74b209c30ebf4d09a92b1b481e",
"assets/common_ui/assets/entrust.png": "7be63f059031eaf5f02017c7f7123ae3",
"assets/common_ui/assets/email_icon.png": "fd217b1c6fa82478a7c8fe5bb702d5d3",
"assets/common_ui/assets/facebook_icon.png": "2bb544ff5f5475b9db5407d0229db23d",
"assets/common_ui/assets/claims_footer.png": "4edcf35cc0418242bbc777f6c2258b27",
"assets/common_ui/assets/close_icon.png": "ea5a876b0c01b83caf7b132118722342",
"assets/common_ui/assets/twitter_icon.png": "8d3adffa5cce0fd506f5787bfd42c1cf",
"assets/common_ui/assets/pre_verified_kyc_img.png": "5a4ea45ef10c55fc40e941985bf5e90b",
"assets/common_ui/assets/iltakecare_logo.png": "cac1bba38e7e24a885cbc5c58b5a3e88",
"assets/common_ui/assets/other_govt_img.png": "455a82a7f0e722dfae68713fd77e71b4",
"assets/images/cover_in_marine.png": "6613353c0746737085e2b5bbd54f52b1",
"assets/images/email.png": "7cce4b02c93e1317e826349c055a8346",
"assets/images/annual_open_enable.png": "9d4f74cac59e76172d0e4d256890ab34",
"assets/images/il_logo.png": "b26147547ad147ca738723e725f51ab6",
"assets/images/banner_container_image4.png": "32253a1509a34476057760057844b028",
"assets/images/safeguard.png": "496f7e41023cef7eb21e01a7c7a78c6a",
"assets/images/risk_management.png": "26bbccd1f46c36222d1926ca408b9ed5",
"assets/images/banner_single_image.png": "36131a4bb5fda2a3c0564cc593b366c5",
"assets/images/list_item_icon.png": "7a2ea704081c2b4eeea47c6f4f4de530",
"assets/images/banner_container_image5.png": "5d43cb36dbb6514a3a54f18ee3da73a9",
"assets/images/view_open_policy_image.svg": "dad0e0cb848fd8746a310d21d29b9412",
"assets/images/support.png": "a3f9e6ddb93b00892af91c68e75394cd",
"assets/images/compliance.png": "1dd85ec1dc3fbc1d76a29f57a424e7da",
"assets/images/need_help.png": "52e9dc1d0c3f24313ab8f44a9b379fd8",
"assets/images/inland_1.png": "ebd2c581ba6ad2c49a4af42440e711ec",
"assets/images/banner_open_image.png": "d556eafa9e335f52dd2fa065b0770cae",
"assets/images/banner_image.png": "2d7c8fcf182705feb34351eb9f6304b2",
"assets/images/banner_container_image6.png": "62ed55e683282cbb2fdcb61cb76b19ec",
"assets/images/loss_cover.png": "dfd528b8c892e8c4c3fd3df0d9782d74",
"assets/images/menu_rectangle.png": "776c959e019375b9a728546f33aae5f0",
"assets/images/banner_container_image2.png": "296aed235936c1f7cfc7c1b453a76ef3",
"assets/images/banner_container_image3.png": "9bbaafc7e8c85c05b443596b6031c92d",
"assets/images/banner_container_image1.png": "1fad7c62f7573ff8a3e3d0d9bd5f1ef9",
"assets/images/single_image.png": "9024aa43784c1cf8f7cb728c32e6d148",
"assets/images/ask_ria_chat_bot.png": "ba2ed303bf646c36c214d2c583d3cb35",
"assets/images/earthquake_cover.png": "60d69355af32d47fe53e85a3219c999f",
"assets/images/install_app_banner.png": "4b45948a0df3d7fa8603974353ceda65",
"assets/images/chat_icon.png": "bf8a8baef991c808504764df8545a8eb",
"assets/images/thank_you.svg": "f9f343412c6869a75f671a19ffa18c97",
"assets/images/single_transit_disable.png": "3729037068276fcb47b226a25aa8a3d8",
"assets/images/customisable.png": "a83a7a6534be4cbfa02acae2f93f06fd",
"assets/images/img.png": "2d3ff6ad2b8864a7bfeff45c36571126",
"assets/images/banner_open_image.svg": "223679d139f10b3570282e002437d356",
"assets/images/fire_cover.png": "138a35c8c931d78ffe714028ab2e46d3",
"assets/images/kyc.png": "6795ab9c66d7d6293e9213ac1b8a57d5",
"assets/images/banner_single_image.svg": "681965f6a1d3c0fb252999141bc5bed2",
"assets/images/pep_image.svg": "410febaa150374e331cb544a9e404069",
"assets/images/down_grey_circle_icon.png": "e23dfce962408f4b2681747516a04477",
"assets/images/mail_icon.png": "a57ac79e5e0a5bc6f846ab82a505154a",
"assets/images/illogo.png": "b26147547ad147ca738723e725f51ab6",
"assets/images/fire_or_explosion.svg": "2ef2e3496c6a41f62c0c8842a9dd994f",
"assets/images/cover_not_available.png": "02cef9b051a5018a7233f93a78108658",
"assets/images/call_circle.png": "5aeddaaeb335a15d5717e9927848c845",
"assets/images/whats_app_image.png": "3425f7dfa3182e55a593db93b8fdaae7",
"assets/images/annual_open.png": "5280b8d0646d124c79e630b01066cee7",
"assets/images/collision_cover.png": "b83b2b545963d59ba5ae51fdd6708273",
"assets/images/email_icon.png": "33caf39f86a310568d7881e7a06f391b",
"assets/images/single_transit.png": "5ca3eed7b3b0dd3b9388cba922ebe3b1",
"assets/images/marine_open_clipart.png": "de3369bb0b56ea595e14d9edb8013401",
"assets/images/claim_banner.png": "1729ddbe58230e0b49c717517b019df6",
"assets/images/phone_icon.png": "53ae6a66b8524cc85c5600ab32ba8c6d",
"assets/images/annual_image.png": "d930f0c3b743fea1ccd39e3660e16487",
"assets/images/comprehensive.png": "87dc764324d955c6ce602b86fd2212ad",
"assets/images/cargo_cover.png": "0d504075a984ff76efbea5f92cd46178",
"assets/images/hassle_free.png": "e75ca08567d41e1814e7d164620f6e67",
"assets/AssetManifest.json": "3fe00ad8ac4baef0f6e7b9639ae50c4e",
"assets/NOTICES": "4d7e29720634e1425c1eed7ad3630b82",
"assets/json/premium_Single_Import.json": "b3b4d57b2e52e4b4ee50e48cd9e55b3e",
"assets/json/proposal_Open_Inland.json": "e39b281cd65deed94dad1daf3edcf67e",
"assets/json/premium_Single_Export.json": "c022904629d9281c886e540a310fd6d4",
"assets/json/validate.json": "f8f135180668ffd3507acbb02d392e73",
"assets/json/premium_Open.json": "0c4fbe68545412041fec022ec2258fc0",
"assets/json/states.json": "09d4bb861409e4b85ddc46ce28fa29ff",
"assets/json/countries.json": "b67c5a792d9ddd5681947c4e424dc204",
"assets/json/premium_Single_Inland.json": "eae96a00a66881beb8f4e9a21b4ad396",
"assets/json/commodity_Single_Inland.json": "42947a22809f66669ca374693fac28ca",
"assets/json/proposal_Single_Import_Export.json": "bdc8de1ed832a49221f298760a27f815",
"assets/json/commodity_Single_Export.json": "bb5cd6532c46b69c223537a7d57ebed6",
"assets/json/currencies.json": "94c5df4f73035fae7f5b9ee0ea50e175",
"assets/json/wce.json": "581adcced70cdd45ca85a86ec8c9597f",
"assets/json/commodity_Single_Import.json": "bb5cd6532c46b69c223537a7d57ebed6",
"assets/json/proposal_Open_Import_Export.json": "08e17a5f089b3f9983390182b0d7fad2",
"assets/json/proposal_Single_Inland.json": "8566a043ae1c5cb1031c9d9ab3ad4306",
"assets/FontManifest.json": "a3bd6dc565588c16987db14ba18fd895",
"assets/AssetManifest.bin.json": "8189abca80ec767a360fa3cd64c560f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dc3eb85d6e6c963325dbe91a88621ab5",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/web_view_demo/images/il_logo.png": "b26147547ad147ca738723e725f51ab6",
"assets/packages/web_view_demo/images/landing_banner.png": "ca85946971e35046c43bf2983dbfe294",
"assets/packages/web_view_demo/images/il-take-care-mob.png": "9b40a2e26eb1f998c51b2c6969780e22",
"assets/packages/web_view_demo/images/need_help.png": "52e9dc1d0c3f24313ab8f44a9b379fd8",
"assets/packages/web_view_demo/images/menu_rectangle.png": "776c959e019375b9a728546f33aae5f0",
"assets/packages/web_view_demo/images/travel.png": "ba6608deca1e3c4962b39b98738423a9",
"assets/packages/web_view_demo/images/health.png": "10b32b182df9add18e8b574640abebb6",
"assets/packages/web_view_demo/images/iltc-logo.png": "befc7a6b1f74e560ca90b4e6fd5d96d8",
"assets/packages/web_view_demo/images/solid-arrow.png": "231fe55b2918d086d55784d76b9dc3b5",
"assets/packages/web_view_demo/images/main-banner-bg.jpg": "0da4fbdda77acef3b8406860c3a7ca8a",
"assets/packages/web_view_demo/images/viewpager14.png": "e8664c7909bc466ff6c53bd99dfe6069",
"assets/packages/web_view_demo/images/viewpager15.png": "64867a82b36505094fd75f069a2243fd",
"assets/packages/web_view_demo/images/bike.png": "a969ec962bc7ad3dc2e70df9b43e4a23",
"assets/packages/web_view_demo/images/viewpager8.png": "edb4d69e71ee42232fb8949cad6830c4",
"assets/packages/web_view_demo/images/viewpager17.jpg": "04e6f40a5416b86a4de94d6705dfa14c",
"assets/packages/web_view_demo/images/green-circle.png": "9dd4f5f9bc9a657a9c69ed0929e4856c",
"assets/packages/web_view_demo/images/viewpager16.jpg": "db9b7f66b2dc4e565a0f89786815ba31",
"assets/packages/web_view_demo/images/call-us-icon.png": "2b50327050c3762b7218377d2582ba3b",
"assets/packages/web_view_demo/images/car_icon.png": "320388c7f97e29519eb11e4585623a6b",
"assets/packages/web_view_demo/images/viewpager12.png": "ae17101d9fcf14fafef088e0de9a9aec",
"assets/packages/web_view_demo/images/viewpager13.jpg": "03bdca13e75361fc45fb6b831b45d360",
"assets/packages/web_view_demo/images/bg-pink.png": "dbd99a1e4eee771ab577f48289baedb1",
"assets/packages/web_view_demo/images/viewpager11.jpg": "50361bdcb0afcf071ed0f70e75cfe301",
"assets/packages/web_view_demo/images/viewpager10.jpg": "2f1c14d2127d1d09b22b84ef9b644671",
"assets/packages/web_view_demo/images/approachable.png": "47462f9105d254973f2bcdbdccc17e54",
"assets/packages/web_view_demo/images/viewpager1.jpg": "a7ad864a8aa247548bd401329abbfba0",
"assets/packages/web_view_demo/images/viewpager3.png": "1cad2eeb12c908cd2c5ad98dc7e9a8c7",
"assets/packages/web_view_demo/images/whatsapp-new-black.png": "5bf8a18337a0dc1e84af360e0e89a3a0",
"assets/packages/web_view_demo/images/viewpager2.png": "585f87f5cdf2de5907aec8d1bc71c74d",
"assets/packages/web_view_demo/images/viewpager6.jpg": "5d92e24c2abac43b1160c6b45579dc8a",
"assets/packages/web_view_demo/images/viewpager7.jpg": "4a6a5722bb662156f464ce8b98e85f34",
"assets/packages/web_view_demo/images/business.png": "1da4579b06cebc481baf018edec6a2b3",
"assets/packages/web_view_demo/images/car.png": "b4fbb9a48af18506daa5ced670887d7f",
"assets/packages/web_view_demo/images/viewpager5.png": "f092ca7834153f97a6b801b9a670e7a6",
"assets/packages/web_view_demo/images/email_icon.png": "33caf39f86a310568d7881e7a06f391b",
"assets/packages/web_view_demo/images/viewpager18.png": "6e847d0eb343e453f0b48130411f5aff",
"assets/packages/web_view_demo/images/viewpager19.png": "e00b648e60e560eca9da1e7795bff93d",
"assets/packages/web_view_demo/images/renewal.png": "c1a9987e0cd8e679e8c20002faa36591",
"assets/packages/web_view_demo/images/viewpager4.jpg": "2987d647a77e86f139eaf4d3853348cc",
"assets/packages/web_view_demo/images/viewpager9.gif": "9e5e787cf0b49ef51fcdfda747ab18e8",
"assets/packages/web_view_demo/images/banner-img.png": "c2616e36897f010e2fd8a70f6ca4fa28",
"assets/packages/web_view_demo/images/phone_icon.png": "53ae6a66b8524cc85c5600ab32ba8c6d",
"assets/packages/web_view_demo/images/chat-icon.png": "bf8a8baef991c808504764df8545a8eb",
"assets/packages/web_view_demo/images/whatsapp.png": "727925cb017bef3ab23d5e5984f63421",
"assets/packages/web_view_demo/images/dependable.png": "9490f7d2b0a53ebb1841ad80c527825b",
"assets/packages/web_view_demo/images/transparent.png": "607284bf62aded2968c233abd55fa6f9",
"assets/packages/web_view_demo/fonts/mulish/Mulish-LightItalic.ttf": "a5f011249bc8904a1696d7bea4940543",
"assets/packages/web_view_demo/fonts/mulish/Mulish-ExtraBoldItalic.ttf": "fa928cf071fb1afc39aee8ea64cb7905",
"assets/packages/web_view_demo/fonts/mulish/Mulish-Italic.ttf": "1936c9c15bd37eb6019c0e46f8cf867b",
"assets/packages/web_view_demo/fonts/mulish/Mulish-Regular.ttf": "5416a925ffafb775c6bffd116d87deb0",
"assets/packages/web_view_demo/fonts/mulish/Mulish-Black.ttf": "5e373d52c280283cb9aa3917ae0c40e2",
"assets/packages/web_view_demo/fonts/mulish/Mulish-BlackItalic.ttf": "e23959a8d3a4c8916f258299a52192af",
"assets/packages/web_view_demo/fonts/mulish/Mulish-SemiBoldItalic.ttf": "0a888514cc9e0946c4bb3b0103f9287e",
"assets/packages/web_view_demo/fonts/mulish/Mulish-ExtraLightItalic.ttf": "b729ccfc6838570d929a06a8ae41c6c5",
"assets/packages/web_view_demo/fonts/mulish/Mulish-Bold.ttf": "b7fa867b7522c7629eca3c4b9f31d3c8",
"assets/packages/web_view_demo/fonts/mulish/Mulish-Light.ttf": "a12ad93579e2da6f8cecb2e89f413a4c",
"assets/packages/web_view_demo/fonts/mulish/Mulish-ExtraBold.ttf": "2000e3092f7d4527368cb41d357fe356",
"assets/packages/web_view_demo/fonts/mulish/Mulish-ExtraLight.ttf": "c07e2efe99c3f232b9011aac63b0389b",
"assets/packages/web_view_demo/fonts/mulish/Mulish-Medium.ttf": "95fb28784ad39295fdd64be6662d81d7",
"assets/packages/web_view_demo/fonts/mulish/Mulish-MediumItalic.ttf": "a2826d91ba780aa9de5181e13d7b847a",
"assets/packages/web_view_demo/fonts/mulish/Mulish-SemiBold.ttf": "a4e6f571273de05494ef24d6fb65c885",
"assets/packages/web_view_demo/fonts/mulish/Mulish-BoldItalic.ttf": "3e40b1e17a4fe836e71d293c32c2fc06",
"assets/packages/kyc_synergy/assets/images/pep_image.svg": "410febaa150374e331cb544a9e404069",
"assets/packages/kyc_synergy/assets/fonts/Mulish-Regular.ttf": "5416a925ffafb775c6bffd116d87deb0",
"assets/packages/kyc_synergy/assets/fonts/Mulish-Black.ttf": "5e373d52c280283cb9aa3917ae0c40e2",
"assets/packages/kyc_synergy/assets/fonts/Mulish-Bold.ttf": "b7fa867b7522c7629eca3c4b9f31d3c8",
"assets/packages/kyc_synergy/assets/fonts/Mulish-Light.ttf": "a12ad93579e2da6f8cecb2e89f413a4c",
"assets/packages/kyc_synergy/assets/fonts/Mulish-ExtraBold.ttf": "2000e3092f7d4527368cb41d357fe356",
"assets/packages/kyc_synergy/assets/fonts/Mulish-ExtraLight.ttf": "c07e2efe99c3f232b9011aac63b0389b",
"assets/packages/kyc_synergy/assets/fonts/Mulish-Medium.ttf": "95fb28784ad39295fdd64be6662d81d7",
"assets/packages/kyc_synergy/assets/fonts/Mulish-SemiBold.ttf": "a4e6f571273de05494ef24d6fb65c885",
"assets/packages/synergy_ui/assets/icici_logo.png": "c49615c1b75cd66eb7d38d7903acfb8e",
"assets/packages/synergy_ui/assets/kyc_img1.png": "a604c7adfbcba76b3d894d6998106821",
"assets/packages/synergy_ui/assets/kyc_img2.png": "2bc8874e388a1f2350f0528bec27c7a5",
"assets/packages/synergy_ui/assets/pan_card_img.png": "0262473f6164c28ed8ddf27500b72baa",
"assets/packages/synergy_ui/assets/query_call_icon.png": "d5e44ea768c4d7a06121794e9ca92808",
"assets/packages/synergy_ui/assets/settle_icon.png": "19e78e463a5fc787e40ad9567d1358a0",
"assets/packages/synergy_ui/assets/home_renewal_si_icon.png": "85bff398412cb15328c8194216feff65",
"assets/packages/synergy_ui/assets/instagram_icon.png": "4a43bd7095817da96481e510aa84cebf",
"assets/packages/synergy_ui/assets/youtube_icon.png": "e6a9d5f8bfbd6f7e561ce04c7bc02948",
"assets/packages/synergy_ui/assets/aadhar_card.png": "fcbc83a6885069ee6c2664b212b895fd",
"assets/packages/synergy_ui/assets/linkedin_icon.png": "3cc272ba2e334f997d2e89ce51743759",
"assets/packages/synergy_ui/assets/digicert.png": "784eb4be1a61e8707bebd80b00cb8008",
"assets/packages/synergy_ui/assets/app_store_download.png": "c06c266be52256c4aae25b4ec78cf3ff",
"assets/packages/synergy_ui/assets/superbrands.png": "fd69e69ff68b08ccca8593553e553fb2",
"assets/packages/synergy_ui/assets/icici_logo2.png": "d37846d738ac68ba419f79768a5f3d2a",
"assets/packages/synergy_ui/assets/survey_icon.png": "7508ec229e28c4ae44fd79e0fdd5a5e5",
"assets/packages/synergy_ui/assets/iltakecare_mobile_view.png": "3092cc30de6984add86b2c958d1314cb",
"assets/packages/synergy_ui/assets/call_icon.png": "20dc38e6265af4278a7d06bc13a3bae1",
"assets/packages/synergy_ui/assets/intimate_icon.png": "941a3f7873a568d18600a3ac85d0b964",
"assets/packages/synergy_ui/assets/play_store_download.png": "bf83fd74b209c30ebf4d09a92b1b481e",
"assets/packages/synergy_ui/assets/entrust.png": "7be63f059031eaf5f02017c7f7123ae3",
"assets/packages/synergy_ui/assets/email_icon.png": "fd217b1c6fa82478a7c8fe5bb702d5d3",
"assets/packages/synergy_ui/assets/facebook_icon.png": "2bb544ff5f5475b9db5407d0229db23d",
"assets/packages/synergy_ui/assets/claims_footer.png": "4edcf35cc0418242bbc777f6c2258b27",
"assets/packages/synergy_ui/assets/fonts/Mulish-Regular.ttf": "5416a925ffafb775c6bffd116d87deb0",
"assets/packages/synergy_ui/assets/fonts/Mulish-Black.ttf": "5e373d52c280283cb9aa3917ae0c40e2",
"assets/packages/synergy_ui/assets/fonts/Mulish-Bold.ttf": "b7fa867b7522c7629eca3c4b9f31d3c8",
"assets/packages/synergy_ui/assets/fonts/Mulish-Light.ttf": "a12ad93579e2da6f8cecb2e89f413a4c",
"assets/packages/synergy_ui/assets/fonts/Mulish-ExtraBold.ttf": "2000e3092f7d4527368cb41d357fe356",
"assets/packages/synergy_ui/assets/fonts/Mulish-ExtraLight.ttf": "c07e2efe99c3f232b9011aac63b0389b",
"assets/packages/synergy_ui/assets/fonts/Mulish-Medium.ttf": "95fb28784ad39295fdd64be6662d81d7",
"assets/packages/synergy_ui/assets/fonts/Mulish-SemiBold.ttf": "a4e6f571273de05494ef24d6fb65c885",
"assets/packages/synergy_ui/assets/close_icon.png": "ea5a876b0c01b83caf7b132118722342",
"assets/packages/synergy_ui/assets/twitter_icon.png": "8d3adffa5cce0fd506f5787bfd42c1cf",
"assets/packages/synergy_ui/assets/pre_verified_kyc_img.png": "5a4ea45ef10c55fc40e941985bf5e90b",
"assets/packages/synergy_ui/assets/iltakecare_logo.png": "cac1bba38e7e24a885cbc5c58b5a3e88",
"assets/packages/synergy_ui/assets/other_govt_img.png": "455a82a7f0e722dfae68713fd77e71b4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "942c96c0c94dcba70ba89de093fe00a6",
"assets/fonts/Mulish-LightItalic.ttf": "a5f011249bc8904a1696d7bea4940543",
"assets/fonts/Mulish-ExtraBoldItalic.ttf": "fa928cf071fb1afc39aee8ea64cb7905",
"assets/fonts/Mulish-Italic.ttf": "1936c9c15bd37eb6019c0e46f8cf867b",
"assets/fonts/Mulish-Regular.ttf": "5416a925ffafb775c6bffd116d87deb0",
"assets/fonts/Mulish-Black.ttf": "5e373d52c280283cb9aa3917ae0c40e2",
"assets/fonts/Mulish-BlackItalic.ttf": "e23959a8d3a4c8916f258299a52192af",
"assets/fonts/Mulish-SemiBoldItalic.ttf": "0a888514cc9e0946c4bb3b0103f9287e",
"assets/fonts/Mulish-ExtraLightItalic.ttf": "b729ccfc6838570d929a06a8ae41c6c5",
"assets/fonts/Mulish-Bold.ttf": "b7fa867b7522c7629eca3c4b9f31d3c8",
"assets/fonts/MaterialIcons-Regular.otf": "653845fe00d89c62bdf961a25223e741",
"assets/fonts/Mulish-Light.ttf": "a12ad93579e2da6f8cecb2e89f413a4c",
"assets/fonts/Mulish-ExtraBold.ttf": "2000e3092f7d4527368cb41d357fe356",
"assets/fonts/Mulish-ExtraLight.ttf": "c07e2efe99c3f232b9011aac63b0389b",
"assets/fonts/Mulish-Medium.ttf": "95fb28784ad39295fdd64be6662d81d7",
"assets/fonts/Mulish-MediumItalic.ttf": "a2826d91ba780aa9de5181e13d7b847a",
"assets/fonts/Mulish-SemiBold.ttf": "a4e6f571273de05494ef24d6fb65c885",
"assets/fonts/Mulish-BoldItalic.ttf": "3e40b1e17a4fe836e71d293c32c2fc06",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
