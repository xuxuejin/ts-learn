// 分析器 负责业务逻辑


// ts 直接引用 js 会有报错，不知道怎么用
// 解决方案：提供一个类型定义文件（翻译文件）
// ts  ->  .d.ts  ->  js
// 把别人提供的翻译文件安装上，ts 先去读取翻译文件，帮助理解 js 里边的内容
// 鼠标放到飘红的 superagent 上，就会提示怎么安装翻译文件
// import superagent from 'superagent';
// 因为之家的网站输出的是 GB2312 的编码，会出现乱码的情况，这边改用 Axios + iconv-lite 这两个库
import cheerio from 'cheerio'
import * as fs from 'fs'
import * as path from 'path'
import { Analyzer } from './crawler'

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

export default class AutoHomeAnalyzer implements Analyzer {
    private filePath = path.resolve(__dirname, '../data/cards.json');

    private getCardInfo(html:string) {
        const $ = cheerio.load(html, {decodeEntities: false});
        const item = $('.c-new-hot li');
        const cardInfo: CardInfo[] = [];

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

        return {
            time: new Date().getTime(),
            data: cardInfo
        }
    }

    private generateJson(result: HotCardResult, filePath: string) {
        let fileContent: Content = {};

        if(fs.existsSync(filePath)) {
            fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        }

        fileContent[result.time] = result.data;

        return fileContent;
    }

    public analyze(html: string, filePath: string) {
        const result = this.getCardInfo(html)

        const content = this.generateJson(result, filePath)

        return JSON.stringify(content)
    }
}
