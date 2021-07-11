// ts 直接引用 js 会有报错，不知道怎么用
// 解决方案：提供一个类型定义文件（翻译文件）
// ts  ->  .d.ts  ->  js
// 把别人提供的翻译文件安装上，ts 先去读取翻译文件，帮助理解 js 里边的内容
// 鼠标放到飘红的 superagent 上，就会提示怎么安装翻译文件
// import superagent from 'superagent';
// 因为之家的网站输出的是 GB2312 的编码，会出现乱码的情况，这边改用 Axios + iconv-lite 这两个库
import axios from 'Axios'
import cheerio from 'cheerio'
import * as iconv from 'iconv-lite'
import * as fs from 'fs'
import * as path from 'path'

interface CardInfo {
    userName: string | undefined,
    userAvatar: string | undefined,
    cardTitle: string,
    cardLink: string | undefined,
    cardImg: string | undefined,
}

interface HotCardResult {
    time: number,
    data: CardInfo[]
}

interface Content {
    [propName:number]: CardInfo[]
}

class Crawler {
    private url = `https://club.autohome.com.cn/hongren#pvareaid=3454622`;
    private filePath = path.resolve(__dirname, '../data/cards.json');

    getCardInfo(html:string) {
        const $ = cheerio.load(html, {decodeEntities: false});
        const item = $('.c-new-hot li');
        const cardInfo: CardInfo[] = [];
        let hotCardResult: HotCardResult;

        item.map((index, ele) => {
            const cardLink = $(ele).find('.c-new-tie').attr('href');
            const cardImg = $(ele).find('.c-new-tie img').attr('src');
            const cardTitle = $(ele).find('.c-new-tie-msg').text();
            const userAvatar = $(ele).find('.c-new-u-info img').attr('src');
            const userName = $(ele).find('.c-new-u-info img').attr('alt');

            cardInfo.push({
                userName,
                userAvatar,
                cardTitle,
                cardLink,
                cardImg
            })
        })

        hotCardResult = {
            time: new Date().getTime(),
            data: cardInfo
        }

        return hotCardResult;
    }

    getRawHtml() {
        // axios.get(this.url, { responseType: 'arraybuffer' }).then((response) => {
        //     const str = iconv.decode(Buffer.from(response.data), 'gb2312');
        //     const html = iconv.encode(str, 'utf8').toString();
        //     // 这么写不是很好 优化一下
        //     this.getCardInfo(html)
        // })
        return axios.get(this.url, { responseType: 'arraybuffer' }).then((response) => {
            const str = iconv.decode(Buffer.from(response.data), 'gb2312');
            const html = iconv.encode(str, 'utf8').toString();
            return html
        })
    }

    generateJson(result: HotCardResult) {

        let fileContent: Content = {};

        if(fs.existsSync(this.filePath)) {
            fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        }

        fileContent[result.time] = result.data;

        return fileContent;
    }

    writeFile(content: Content) {
        fs.writeFileSync(this.filePath, JSON.stringify(content))
    }

    async initSpider() {
        const html = await this.getRawHtml();

        const result = this.getCardInfo(html)

        const content = this.generateJson(result)

        this.writeFile(content)
    }

    constructor() {
        // superagent 使用js语法写的，直接引用不会有提示
        // superagent.
        // this.getRawHtml();
        this.initSpider()
    }
}

const crawler = new Crawler()

// 以上的功能实现了，但不是很好
// 解析 html 和存 json 是通用的模块
// 而具体的业务，包括爬取的网址，但是不一样的，这一块业务可以拆分开来
// 详见 crawler.ts
