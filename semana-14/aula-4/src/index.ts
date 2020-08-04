import api from '../api/api';

type subscriberType = {
  id: string;
  name: string;
  email: string;
};

type newsType = {
  id?: string;
  title: string;
  content: string;
  date: number;
};

async function main(command?: string): Promise<any> {
  try {
    async function test(request: any): Promise<void> {
      const result = await request;
      console.log(result);
    }

    const getSubscribers = async (): Promise<subscriberType[]> => {
      const { data } = await api.get('/subscribers/all');
      return data.map(({ id, name, email }: subscriberType) => ({
        id,
        name,
        email,
      }));
    };

    const createSubscriber = async (
      name: string,
      email: string
    ): Promise<string> => {
      await api.put('/subscribers', { name, email });

      return 'Assinante cadastrado com sucesso.';
    };

    const getNews = async (): Promise<newsType> => {
      const { data } = await api.get('/news/all');
      return data.map(({ id, title, content, date }: newsType) => ({
        id,
        title,
        content,
        date,
      }));
    };

    const createNews = async (
      news: newsType,
      sendAll?: boolean
    ): Promise<string> => {
      await api.put('/news', news);

      if (sendAll) {
        const subscribers = await getSubscribers();
        const message = `Notícia quente! ${news.title}`;

        await sendNotifications(subscribers, message);

        return 'Nóticia criada e notificada com sucesso.';
      }

      return 'Notícia criada com sucesso.';
    };

    const sendNotifications = async (
      subscribers: subscriberType[],
      message: string
    ): Promise<string> => {
      const promiseArray = [];

      for (const { id: subscriberId } of subscribers) {
        promiseArray.push(
          api.post('/notifications/send', {
            subscriberId,
            message,
          })
        );
      }

      await Promise.all(promiseArray);

      return 'Notificações enviadas com sucesso.';
    };

    const getNotifications = async (
      subscribers: subscriberType[]
    ): Promise<any> => {
      const promiseArray = [];

      for (const { id } of subscribers) {
        promiseArray.push(api.get(`/subscribers/${id}/notifications/all`));
      }

      const resultArray = await Promise.all(promiseArray);

      resultArray.forEach((result) => {
        console.log(result.data);
      });
    };

    if (command) {
      let result: any =
        'Parâmetro inválido: informar "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7-a", "ex7-b" ou "ex7-c"';

      if (command === 'ex1' || command === 'ex2' || command === 'ex3') {
        result = await getSubscribers();
      } else if (command === 'ex4') {
        result = await createNews({
          title: 'Título da notícia',
          content: 'Corpo da notícia',
          date: Date.now(),
        });
      } else if (command === 'ex5' || command === 'ex6') {
        const subscribers = await getSubscribers();
        result = await sendNotifications(subscribers, 'Corpo da mensagem');
      } else if (command === 'ex7-a') {
        result = await createSubscriber(
          `User${Date.now()}`,
          `user${Date.now()}@random.com`
        );
      } else if (command === 'ex7-b') {
        result = await createNews(
          {
            title: 'Título da notícia',
            content: 'Corpo da notícia',
            date: Date.now(),
          },
          true
        );
      } else if (command === 'ex7-c') {
        const subscribers = await getSubscribers();
        result = await getNotifications(subscribers);
      }

      console.log(result);
    } else {
      console.log(
        'Parâmetro não encontrado: informar "ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7-a", "ex7-b" ou "ex7-c'
      );
    }
  } catch (error) {
    console.log(error);
  }
}

main(process.argv[2]);
