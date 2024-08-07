const mongoose = require("mongoose");
const { listingDB } = require("../model/listing");

(async () => {
  await mongoose.connect("mongodb://127.0.0.1/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let json = {
    "652118add1aa1e2cd26e164d": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/xa4zeqm7eh09b92z0z6emfhkm58r3wmr?alt=media&token=9f88b541-02c1-4e45-a886-96d245672da0",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/s2qvsnrm0qzmbk5ccjbqn36mheemcvfr?alt=media&token=099d65e6-3a75-4661-9377-75be973424ee",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/PJA%2520Payment%2520Plan%2520-%2520Villa%2520Plots%2520v3.pdf%3Falt%3Dmedia%26token%3Dd130a712-1fa2-41d0-921a-4d6d2c8dee23?alt=media&token=0f24dcdf-afb2-45e9-9111-94d82d2c0e94",
    ],
    "658c2ddbd0a0a338b29181ce": [],
    "658c2e1ad0a0a338b29181d0": [],
    "65ab843860ea7db136118c62": [],
    "65ab844860ea7db136118c64": [],
    "65c071e2b4a3938730e7ace3": [],
    "65c202926faa6122faccb3f6": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/jh44ypnq99gv31kz20k5bj2cwzey4f6b?alt=media&token=d6a7051d-1494-42ba-aca8-f3f20a717c2f",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/wfkxhq7zp8dgq7r9b5ebkhra3dy07x3m?alt=media&token=310f8393-c431-4e38-9fa1-b7107a61c0d2",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/7jepx7eww3b8x7wpn9ec27mq64gnnra0?alt=media&token=67d97a41-6cf4-4140-b72f-19cf5f21fb98",
    ],
    "65c229cb6faa6122faccb464": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/a8wx394xh9me99j0c8wyvgw2hakmfn4q?alt=media&token=6d8a90b4-18a8-42cc-97d8-24105d6f5ea0",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/hw7h51hybesfvay4x94qs2tjraxz2mh4?alt=media&token=9a79fda6-b28d-44f7-a0ec-5ca651e15db4",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/wtfw0152cfvzkq5bek0gspg2230eeqk7?alt=media&token=f1667f66-5f6a-4fce-b35d-abc84c25e5ae",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/v36c8m069fjyknf7ydqc1cs5n48rrzhj?alt=media&token=f6bdf274-f19f-4c6f-8e38-a8eda996d9ee",
    ],
    "65c27b296faa6122faccb4a1": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/134hgz3yej021fx8j936yh72k2qxmmnb?alt=media&token=9be80930-1f06-4d5d-9bc3-73aa5cd1726d",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/mywfmz2bkw4eqp76j6nzt5r1x2v87wrd?alt=media&token=b2d4d6ac-8f56-4261-850f-736363b1e190",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/mtnjbepd0ex51pe4d56ydx6vhng06aks?alt=media&token=33505d00-3625-4704-897a-904296902aac",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/p7gfw2zfpzwk11xjr0srkspjrv8t35wq?alt=media&token=fbfa6c36-ac71-47c6-a8ef-d7fe75208072",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/za8ggvxsaq9mh9pcj9jakdn3t5ag5dm9?alt=media&token=4ebcefd4-469c-4391-a811-1cd511acda26",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/fkz9ff14d9myten5zq7g6enwcqrxe325?alt=media&token=af7803e7-a9e1-47a2-9789-6f43c09783ee",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/esqed4pv09vpjbkke2yx7fcteqc3k2b5?alt=media&token=396e77a7-27f3-4eec-914e-9e8d0e909ddf",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/rr644znrfwt68x0paa424z1rbvh7ebta?alt=media&token=9a5e3068-e1b2-4310-bbba-6059746ae6cc",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/repykbv0e3epatbkfh8rb02evvme2j2j?alt=media&token=b03ea7a3-07c1-45d7-bb51-bae95976adf3",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/rza3y1cqqjckyh17h3v1nvw778pqzxw1?alt=media&token=74dbda75-24df-491c-89cc-0ece1943fb8a",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/vqfvh1hpda7xaanbr6cp72w1pwvhpemj?alt=media&token=fc8f5816-b564-42f4-89fa-968c89e9ae28",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/cg0y1nejsy19g7h9qdybj4ah0xcg85x5?alt=media&token=caa6f055-6aca-4e43-aa85-c13c6b2e9644",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/e3b1w2tphht9rdcb49eq8w1p4fv9nkf0?alt=media&token=8fb03a7e-e6e1-46e3-be29-8ba682e7c6ad",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/fkz9ff14d9myten5zq7g6enwcqrxe325?alt=media&token=e70ac4b2-d503-4f4d-9aa0-5f495f96e8c0",
    ],
    "65c284bc6faa6122faccb4c5": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/yscxwz9t9kzqfdmwa0xjd45er0xx19fk?alt=media&token=f5235061-aaaf-45d6-8467-e1aeee45695d",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/5s1pfyacfpz8yt2b7c86pncg5e52hwdg?alt=media&token=fcbfb07a-5140-4a00-9b84-098edbd136dc",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/3nh2ve4k19w65fn2pb2wvpsa7td7t9a0?alt=media&token=2fd85998-453d-4b3f-a271-a3a2d60b5cda",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/5ccyffkaqjevxg7699y6mj6gvxg2n9vq?alt=media&token=f75ebfe8-d345-4548-af24-6a3575045d98",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/4s5e59d7srzbwpjbp3wv00sfvq71wsqt?alt=media&token=05ab8f4d-f0b4-4bad-820a-5fd08d80c788",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/cy0vykv1eyedtc94qe01fnpx7tkm307k?alt=media&token=cb465774-6c54-498d-9077-d23fc380d448",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/mfgvnxyfkn1w6fg672destymahek9t97?alt=media&token=f2852f65-1534-4ab4-b420-b80a822fd529",
    ],
    "65d339a6f29eecd0901c84c9": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/mcvc07z5r8dfrcvrym65tgnrgvyvgxyp?alt=media&token=c2c24df3-770e-4601-ac1d-6662b0f02889",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/bcjrs0qh11ky1hdzkkmdj6t2kgjq1r2t?alt=media&token=ffa0326e-ee42-475d-b638-df8af36e0b9e",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/vv3k0qn95ww5vjbksvz9e7py1n82sxfc?alt=media&token=89998dbc-20b5-48ea-9dfd-029a6a16f1f5",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/mgwg1xddabkptjxztv4f4ayhba05fg69?alt=media&token=ff8eedd9-3a94-49be-ae74-048d3aee2269",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/yss7vqmmbsrtv4nvcvzqhrzj2v1rwttd?alt=media&token=cc870f05-3e41-4f22-924e-4319ad3abdb2",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/8t9mj0pbscwg2t8mfcccyb38j4kqa2dh?alt=media&token=9cc39aa1-482b-4c26-8a71-7be3c8bd37a0",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/m0z1z25yj6tpjg5jg7eh978kse02s1gx?alt=media&token=c831f7af-5beb-42ac-8d80-fa4adbe9fcfa",
    ],
    "65d59b1acc1d87f1dd8d376b": [],
    "65db4ba2b8dc9858055e546a": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/esqed4pv09vpjbkke2yx7fcteqc3k2b5?alt=media&token=5dc1c3e2-450d-4062-8f59-5ae6c3f1da14",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/zcw2wa0086ncjg2h6wq69g4q95cq4ttv?alt=media&token=fbd36302-f788-44c2-96ca-dc11c0d0080c",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/mtnjbepd0ex51pe4d56ydx6vhng06aks?alt=media&token=0a92254d-87e5-495e-b212-3fcd06cfc7cb",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/mywfmz2bkw4eqp76j6nzt5r1x2v87wrd?alt=media&token=70732fa2-4ae2-4b2d-8d8b-7f35d547e4f5",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/vqfvh1hpda7xaanbr6cp72w1pwvhpemj?alt=media&token=11d49497-20e6-4e13-936c-e79190acc493",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/5ve48rbw98mywa1369gdvxj309kemadj?alt=media&token=c07cd063-572a-4d18-a427-36c2cc2e04c8",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/p7gfw2zfpzwk11xjr0srkspjrv8t35wq?alt=media&token=b7f49888-2ca5-4ce1-b4e7-93a861afd71a",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/fkz9ff14d9myten5zq7g6enwcqrxe325?alt=media&token=691ea71a-14db-478f-9f4a-32b83de36ff0",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/za8ggvxsaq9mh9pcj9jakdn3t5ag5dm9?alt=media&token=7b17800a-ba1d-4aaa-8639-532bbac00087",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/rr644znrfwt68x0paa424z1rbvh7ebta?alt=media&token=608792de-a0c6-4099-ab2a-371788f9300c",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/repykbv0e3epatbkfh8rb02evvme2j2j?alt=media&token=727bea7c-cb43-4dbe-a2c0-643714a96133",
    ],
    "66050a6499eebdddf48832fe": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/5ccyffkaqjevxg7699y6mj6gvxg2n9vq?alt=media&token=51b52c25-87d1-4d8a-a613-e1c9ac1e8056",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/r5gg1waee1qj02kjq56a3ee248n3p7ym?alt=media&token=11ef9020-d1be-476b-9386-4e1cc245122d",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/aptm2pvg5h95tj09ek0mv57fb68qgm8q?alt=media&token=932dfe5e-3594-4e10-91bb-70a3a716a8bf",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/a6gxpgean9cmwrxts85e8w6gkg70fvbe?alt=media&token=be5f9d7c-7413-4dc7-ac1e-b162463666dd",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/1xhy74jeb5xzt6wpbr9zg2qrw3d7yp1j?alt=media&token=e4d75853-9caf-4a4e-958a-b604b5dda6bc",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/haqfepq7khh1xtpm4wmth36gj0q04yy6?alt=media&token=9b94149f-0b61-4dda-ba49-c34ff3a64fa6",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/4s5e59d7srzbwpjbp3wv00sfvq71wsqt?alt=media&token=56c4e037-98e7-4eab-adc0-4a562839480e",
    ],
    "660536da99eebdddf488332a": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/tg7x06c0r3kc97rjvvap1dgzer8v2fh5?alt=media&token=3e79c5f9-2423-4ac8-a305-09865da18f22",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/1h6mv4aaef0yxs0dgrjm4ybmk3harg7n?alt=media&token=c74df4c6-6a5b-4fea-96ca-32a7986fb2af",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/6qdpt0mape2c7bs7a0p7wx06hyw2d41y?alt=media&token=6de1b13c-8953-4446-b41d-d5f4e95d2ea1",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/y643dj3pr0pzhas6dqd9qjxr72pnbkk4?alt=media&token=276eedab-75d9-445d-95c1-a75ec69698b3",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/r5gg1waee1qj02kjq56a3ee248n3p7ym?alt=media&token=fb99d91d-d06d-47f2-b77b-dddfb95ffa6c",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/xj387aa8zzc4m75gvd5bag3fe7psrr9w?alt=media&token=5970ce97-d9a5-4f37-a714-5febeeea172b",
    ],
    "661b7cfd099dd60d040af6d2": [],
    "6625ced1a667b63378c27918": [],
    "66489061fbf468b4e2e9449b": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/n0y8zjzrxbr39qnf5bqd9tv947ws988m?alt=media&token=b8ca3b4d-49c8-4176-b309-cae70d33c922",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/sg1483wmgdc92a10ehc7y16z0p5fan8d?alt=media&token=3ba66968-c1f7-4482-a15b-306f30899626",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/hc4s3x4jbk398j72p07rm88kpkmxs168?alt=media&token=8f6118b8-f440-41e7-8512-4e9da1a36040",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/0vfkc7phbnkg8c6dc8fsvqhsr5xkg6wg?alt=media&token=46a28c9c-1c0b-4953-ace5-1baf44096878",
    ],
    "6659e46bfbf468b4e2e94af2": [
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/efw77njam6shgrvv7agwn8acb6qtq64k?alt=media&token=1c46cd5c-587c-4ce5-8d92-54a7ecf04a78",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/rmgdjbkyce56ve8961vgdfp372vh85hk?alt=media&token=7b9c7374-b4ac-4959-a6dd-d97c5869a0b8",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/z3x3w8rakm07mfjqnd754b5kp98n3rwk?alt=media&token=5be680c8-b01a-4016-8244-7df90029dfdb",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/qrkqsnmnnaxg89q5n7vb9068npkcrmsg?alt=media&token=06dfec80-6c6b-4684-afab-8547f092e99a",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/vxbswrxfb8pcssz936pxn1v9rnrmye93?alt=media&token=f6a76e7c-58e3-4bee-a0ca-7566824b2da7",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/1bm0kgkxn04zxr12t6cr91hjx5yc6pvs?alt=media&token=b7c8d14f-ed21-433a-b087-a3dd439068e2",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/hpc34srzd3b8asyp9v60maryesnjearj?alt=media&token=1698eecd-0a6a-47ae-8b3d-f717b0290b43",
      "https://firebasestorage.googleapis.com/v0/b/sellanyhome-66c20.appspot.com/o/npsqt883y54s081nbznv0sd5ct74ezt7?alt=media&token=8a333ac6-0206-4d6a-b29b-f205db92e130",
      "https://api.tinify.com/output/wndxxkwcz5nd18x805eba0yjm0c4a2b9",
    ],
    "6661a005fbf468b4e2e94e74": [
      "https://api.tinify.com/output/18fzbncaqj4mt7bjsbgeah46hebseda0",
      "https://api.tinify.com/output/y813shx7gnr9nz1abz5qvjz126rcrdz8",
      "https://api.tinify.com/output/4em122adx306gz041gv0emfsmj03ctys",
      "https://api.tinify.com/output/h41emkfqac76tj17c30xrpabygb0m4ve",
    ],
    "6661a2b2fbf468b4e2e94eac": [
      "https://api.tinify.com/output/689g8dpfkgnqz5dnwe9wdgtr4w17zskk",
      "https://api.tinify.com/output/gjxpxs8pn55yn51c9rhmn63v4kks243b",
      "https://api.tinify.com/output/x4p7bsa63dnfkwptmkh0mrrzgdx05cft",
      "https://api.tinify.com/output/a49nabrgrrr4cemwhjg3wsc6dmh3e587",
      "https://api.tinify.com/output/zc31kjhssekzzrf0zf4zfynhn5t89rtv",
      "https://api.tinify.com/output/nkd5sdvfn8k7ars8kbjc1wfbjyvbymqc",
      "https://api.tinify.com/output/pmescbtxbxmwc6b1kady2t7kg0022wwb",
      "https://api.tinify.com/output/z018a0azdrt4xcnn8neawxjkcz4dba60",
      "https://api.tinify.com/output/206p8wnk7ca0ham7m48ak5860pdpww39",
      "https://api.tinify.com/output/ac1zb9d1beqvwnksaspma3c9009vfs8a",
    ],
    "6662ba4efbf468b4e2e94f09": [
      "https://api.tinify.com/output/9wwpphsvysvpwgt7qrgwd99kb9fmsqxp",
      "https://api.tinify.com/output/215pcv8e7nfjqyzzd114bvvb180cwk01",
      "https://api.tinify.com/output/8ggz57cyzyywdnr2hx6t2ew3y6eyvb8c",
      "https://api.tinify.com/output/qnnvzhx4nkgxm79vqm95zpm0mxbgqf2k",
    ],
    "6662cc11fbf468b4e2e94f48": [
      "https://api.tinify.com/output/5981tzzz8jdmswdn0mt477by0x4355w7",
      "https://api.tinify.com/output/j9pds17z6gts98ap6y0paj0ydkjtx0c9",
      "https://api.tinify.com/output/dte0t1t6n3hgs4cpjh4edyzfjkd1r7eq",
      "https://api.tinify.com/output/1sve90551x8m3ktdd0mwcn47qqn6zvvp",
      "https://api.tinify.com/output/8q45yrpjq9tdgrq0181ayv2fx1hbvb9y",
      "https://api.tinify.com/output/ksyjtnaa1n6q36gyg2akec7tkkjc5ye8",
      "https://api.tinify.com/output/43gskfjbjw7krqs7vyehv84cegvc228x",
      "https://api.tinify.com/output/n78hqa2140m5x5hww76qhbdvmv7m42x3",
      "https://api.tinify.com/output/80b5skjk8z3bxttvvs6n6900fthatqt5",
    ],
    "6662cd49fbf468b4e2e94f53": [
      "https://api.tinify.com/output/j9pds17z6gts98ap6y0paj0ydkjtx0c9",
      "https://api.tinify.com/output/1sve90551x8m3ktdd0mwcn47qqn6zvvp",
      "https://api.tinify.com/output/ksyjtnaa1n6q36gyg2akec7tkkjc5ye8",
      "https://api.tinify.com/output/80b5skjk8z3bxttvvs6n6900fthatqt5",
      "https://api.tinify.com/output/43gskfjbjw7krqs7vyehv84cegvc228x",
    ],
    "666408d3fbf468b4e2e94fd5": [
      "https://api.tinify.com/output/dexrksb2dd4zdt8pkx0kq85vw8aptz4z",
      "https://api.tinify.com/output/mrd1chdg8vbjh4ambrj12bgyaa2sm58r",
      "https://api.tinify.com/output/qphy2bmv9mpvabn3wva3sfsnj4mrsnmv",
      "https://api.tinify.com/output/kk3tn5v5b9648h5admgkqhgcez3y7kfb",
    ],
    "666c2b1bfbf468b4e2e952ee": [
      "https://api.tinify.com/output/mkptqvnkkzdt4413cf6ksfpa4pw229w8",
    ],
    "66806baefbf468b4e2e9585e": [
      "https://api.tinify.com/output/48esjk198hcrq6dzzs9kytx809qapeb1",
      "https://api.tinify.com/output/2r7sh1vy22fwvdvxc2kyvfa2qb4yq7na",
      "https://api.tinify.com/output/ybvmvffy4t3hthgdh1fg7904h1rv64wp",
      "https://api.tinify.com/output/aa3fererpe57feda702kdxyerx80g6gn",
      "https://api.tinify.com/output/rvxant1yqp16vx0z5yz0ye5k4cx32xan",
      "https://api.tinify.com/output/anab8rgxjjyg3dpgcyekf183rj8yvn9q",
      "https://api.tinify.com/output/nta69dg53g00k1qr2knaaer15atvgeyw",
      "https://api.tinify.com/output/ye20xk3d30vey7rcz1hgxqvt7brsdtjc",
      "https://api.tinify.com/output/a8yv6zqp9f8666sb35ge9ykte76h1804",
      "https://api.tinify.com/output/bqyn3jcwryky9tr4t7j0vnmjnw52k654",
      "https://api.tinify.com/output/h2jvdbrnreynsb9vred751xhbt6rg87r",
    ],
    "668854e5fbf468b4e2e95afc": [
      "https://api.tinify.com/output/jmstwxbbrbe7vspgtrcs20q2cchhbcz7",
      "https://api.tinify.com/output/4xwa32hvx0j15e96q5hwjfkvnypx8m8n",
      "https://api.tinify.com/output/7pzhq4sm241jtsb0ted0jw52zn07t3hd",
      "https://api.tinify.com/output/8qwkhkgsqj4yshxj6ja7g35xsfg92vhs",
      "https://api.tinify.com/output/vtepzteazdzw8e2g2jshhcp3q8s9nkwn",
      "https://api.tinify.com/output/kdtfws70y21hpj1md5df0tykykvkve5e",
      "https://api.tinify.com/output/m1w1fw3r06j06ccd7z8y5j3t8s3g7ezc",
      "https://api.tinify.com/output/2br2szja68xwjg83ybv37w5jn62jed3f",
      "https://api.tinify.com/output/eqm7mmgecs6wfpe01fhagcnffma06gxx",
      "https://api.tinify.com/output/c790q21zjfseaykyaaf4q66zy3ab2ycs",
      "https://api.tinify.com/output/1ab6hwz2rqjk9pytmay1j345gnp990cr",
      "https://api.tinify.com/output/kv27t96bqed6eb3mqywy0h0pss7781d0",
    ],
  };

  let array = Object.keys(json);

  for (let key of array) {
    let images = json[key];
    // { $set: { images } }
    const listing = await listingDB.updateOne(
      { _id: key },
      { $set: { images: images } }
    );

    console.log("Found", listing._id);
  }
})();
