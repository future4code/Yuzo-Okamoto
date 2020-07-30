"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api/api");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            function test(request) {
                return __awaiter(this, void 0, void 0, function* () {
                    const result = yield request;
                    console.log(result);
                });
            }
            const getSubscribers = () => __awaiter(this, void 0, void 0, function* () {
                const { data } = yield api_1.default.get('/subscribers/all');
                return data.map(({ id, name, email }) => ({
                    id,
                    name,
                    email,
                }));
            });
            const createSubscriber = (name, email) => __awaiter(this, void 0, void 0, function* () {
                yield api_1.default.put('/subscribers', { name, email });
                return 'Assinante cadastrado com sucesso.';
            });
            const getNews = () => __awaiter(this, void 0, void 0, function* () {
                const { data } = yield api_1.default.get('/news/all');
                return data.map(({ id, title, content, date }) => ({
                    id,
                    title,
                    content,
                    date,
                }));
            });
            const createNews = (news, sendAll) => __awaiter(this, void 0, void 0, function* () {
                yield api_1.default.put('/news', news);
                if (sendAll) {
                    const subscribers = yield getSubscribers();
                    const message = `Notícia quente! ${news.title}`;
                    yield sendNotifications(subscribers, message);
                    return 'Nóticia criada e notificada com sucesso.';
                }
                return 'Notícia criada com sucesso.';
            });
            const sendNotifications = (subscribers, message) => __awaiter(this, void 0, void 0, function* () {
                const promiseArray = [];
                for (const { id: subscriberId } of subscribers) {
                    promiseArray.push(api_1.default.post('/notifications/send', {
                        subscriberId,
                        message,
                    }));
                }
                yield Promise.all(promiseArray);
                return 'Notificações enviadas com sucesso.';
            });
            const getNotifications = (subscribers) => __awaiter(this, void 0, void 0, function* () {
                const promiseArray = [];
                for (const { id } of subscribers) {
                    promiseArray.push(api_1.default.get(`/subscribers/${id}/notifications/all`));
                }
                const resultArray = yield Promise.all(promiseArray);
                resultArray.forEach((result) => {
                    console.log(result.data);
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
//# sourceMappingURL=index.js.map