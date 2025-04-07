document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
  });

  const translations = {
    pl: {
      jobListTitle: 'Lista ofert pracy',
      jobListSubtitle: 'Wybierz ofertę pracy z listy poniżej',
      masazystaTitle: 'Masażysta / Masażystka',
      masazystaSalary: 'od 32 zł/godz.',
      adminTitle: 'Administrator salonu masażu',
      adminSalary: '7000-14 000 zł/miesiąc',
      backToList: 'Wróć do listy',
      callToAction: 'Zainteresowany? Skontaktuj się z nami!',
      masazysta: {
        title: 'Masażysta/Masażystka',
        subtitle: 'Możliwe bez doświadczenia',
        dutiesTitle: 'Obowiązki',
        duties: [
          { icon: 'fas fa-hands', text: 'Wykonywanie masaży zgodnie ze standardami' },
          { icon: 'fas fa-book-open', text: 'Chęć nauki i rozwoju umiejętności' },
          { icon: 'fas fa-user-shield', text: 'Dyskrecja i profesjonalne podejście' },
          { icon: 'fas fa-broom', text: 'Dbałość o higienę stanowiska pracy' },
          { icon: 'fas fa-clock', text: 'Punktualność i odpowiedzialność za grafik' },
          { icon: 'fas fa-users', text: 'Budowanie pozytywnych relacji z klientami' },
          { icon: 'fas fa-tools', text: 'Utrzymanie sprzętu w dobrym stanie' },
        ],
        requirementsTitle: '',
        requirements: [],
        conditionsTitle: 'Warunki',
        conditions: [
          { icon: 'fas fa-calendar-alt', text: 'Elastyczny grafik pracy' },
          { icon: 'fas fa-home', text: 'Bezpłatne zakwaterowanie' },
          { icon: 'fas fa-shield-alt', text: 'Przyjazne i bezpieczne środowisko' },
          { icon: 'fas fa-money-bill-wave', text: 'Wynagrodzenie od 32 zł/godz.' },
          { icon: 'fas fa-map-marker-alt', text: 'Miejsce pracy: Warszawa' },
        ],
        aboutTitle: '',
        aboutText: '',
      },
      admin: {
        title: 'Administrator salonu masażu',
        subtitle: 'Stabilna praca w młodym zespole',
        dutiesTitle: 'Obowiązki',
        duties: [
          { icon: 'fas fa-smile', text: 'Przyjemne przyjmowanie klientów i konsultacje' },
          {
            icon: 'fas fa-phone',
            text: 'Zapisywanie klientów (telefon, komunikatory, online)',
          },
          { icon: 'fas fa-calendar-check', text: 'Organizacja grafiku pracy masażystów' },
          { icon: 'fas fa-broom', text: 'Kontrola czystości i porządku w salonie' },
          { icon: 'fas fa-cash-register', text: 'Praca z kasą i prowadzenie raportów' },
        ],
        requirementsTitle: 'Wymagania',
        requirements: [
          {
            icon: 'fas fa-briefcase',
            text: 'Doświadczenie w obsłudze klienta (mile widziane)',
          },
          { icon: 'fas fa-comments', text: 'Komunikatywność, odpowiedzialność, schludność' },
          {
            icon: 'fas fa-laptop',
            text: 'Podstawowe umiejętności obsługi komputera i smartfona',
          },
        ],
        conditionsTitle: 'Warunki',
        conditions: [
          { icon: 'fas fa-users', text: 'Stabilna praca w młodym i przyjaznym zespole' },
          { icon: 'fas fa-shield-alt', text: 'Komfortowe środowisko pracy' },
          { icon: 'fas fa-calendar-alt', text: 'Elastyczny grafik' },
          { icon: 'fas fa-percent', text: 'Zniżki na usługi salonu' },
          { icon: 'fas fa-arrow-up', text: 'Możliwość rozwoju zawodowego' },
          { icon: 'fas fa-map-marker-alt', text: 'Miejsce pracy: Warszawa' },
          { icon: 'fas fa-clock', text: 'Typ zatrudnienia: Pełny etat / Praca zmianowa' },
          {
            icon: 'fas fa-money-bill-wave',
            text: 'Wynagrodzenie: 7000-14 000 zł/miesiąc + system premiowy',
          },
        ],
        aboutTitle: 'O nas',
        aboutText:
          'Jesteśmy nowym salonem masażu w centrum Warszawy, który łączy wysokiej jakości usługi, przytulną atmosferę i profesjonalne podejście. Naszą misją jest stworzenie miejsca, do którego klienci wracają z przyjemnością. W związku z otwarciem poszukujemy odpowiedzialnego administratora, który dołączy do naszego zespołu.',
      },
    },
    uk: {
      jobListTitle: 'Список вакансій',
      jobListSubtitle: 'Виберіть вакансію зі списку нижче',
      masazystaTitle: 'Масажист / Масажистка',
      masazystaSalary: 'від 32 зл/год.',
      adminTitle: 'Адміністратор масажного салону',
      adminSalary: '7000-14 000 зл/місяць',
      backToList: 'Повернутися до списку',
      callToAction: 'Зацікавило? Пиши нам!',
      masazysta: {
        title: 'Масажист/Масажистка',
        subtitle: 'Можна без досвіду',
        dutiesTitle: 'Обов’язки',
        duties: [
          { icon: 'fas fa-hands', text: 'Виконання масажів за стандартами' },
          { icon: 'fas fa-book-open', text: 'Бажання навчатися та розвиватися' },
          { icon: 'fas fa-user-shield', text: 'Дискретність і повага до клієнтів' },
          { icon: 'fas fa-broom', text: 'Підтримка чистоти робочого місця' },
          { icon: 'fas fa-clock', text: 'Пунктуальність і відповідальність за графік' },
          { icon: 'fas fa-users', text: 'Створення позитивних відносин із клієнтами' },
          { icon: 'fas fa-tools', text: 'Підтримка обладнання в хорошому стані' },
        ],
        requirementsTitle: '',
        requirements: [],
        conditionsTitle: 'Умови',
        conditions: [
          { icon: 'fas fa-calendar-alt', text: 'Гнучкий графік роботи' },
          { icon: 'fas fa-home', text: 'Безкоштовне проживання' },
          { icon: 'fas fa-shield-alt', text: 'Комфортне та безпечне середовище' },
          { icon: 'fas fa-money-bill-wave', text: 'Зарплата від 32 зл/год.' },
          { icon: 'fas fa-map-marker-alt', text: 'Місце роботи: Варшава' },
        ],
        aboutTitle: '',
        aboutText: '',
      },
      admin: {
        title: 'Адміністратор масажного салону',
        subtitle: 'Стабільна робота в молодій команді',
        dutiesTitle: 'Обов’язки',
        duties: [
          { icon: 'fas fa-smile', text: 'Привітний прийом клієнтів і консультація' },
          { icon: 'fas fa-phone', text: 'Запис клієнтів (телефон, месенджери, онлайн)' },
          { icon: 'fas fa-calendar-check', text: 'Організація графіку роботи майстрів' },
          { icon: 'fas fa-broom', text: 'Контроль чистоти та порядку в салоні' },
          { icon: 'fas fa-cash-register', text: 'Робота з касою та ведення звітності' },
        ],
        requirementsTitle: 'Вимоги',
        requirements: [
          { icon: 'fas fa-briefcase', text: 'Досвід у сфері обслуговування (перевага)' },
          { icon: 'fas fa-comments', text: 'Комунікабельність, відповідальність, охайність' },
          { icon: 'fas fa-laptop', text: 'Базові навички роботи з ПК та смартфоном' },
        ],
        conditionsTitle: 'Ми пропонуємо',
        conditions: [
          { icon: 'fas fa-users', text: 'Стабільна робота в молодому та дружньому колективі' },
          { icon: 'fas fa-shield-alt', text: 'Комфортне робоче середовище' },
          { icon: 'fas fa-calendar-alt', text: 'Гнучкий графік' },
          { icon: 'fas fa-percent', text: 'Знижки на послуги салону' },
          { icon: 'fas fa-arrow-up', text: 'Можливість професійного росту' },
          { icon: 'fas fa-map-marker-alt', text: 'Місце роботи: Варшава' },
          { icon: 'fas fa-clock', text: 'Тип зайнятості: Повна зайнятість / Позмінна робота' },
          {
            icon: 'fas fa-money-bill-wave',
            text: 'Зарплата: 7000-14 000 зл/місяць + бонусна система',
          },
        ],
        aboutTitle: 'Про нас',
        aboutText:
          'Ми — новий масажний салон у центрі Варшави, який поєднує якісні послуги, затишну атмосферу та професійний підхід. Наша місія — створити простір, куди клієнти повертатимуться із задоволенням. У зв’язку з відкриттям ми шукаємо відповідального адміністратора, який стане частиною нашої команди.',
      },
    },
  };

  let currentLang = safeStorage.get('lang') || 'uk';
  let currentJob = null;

  function updateActiveButton(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function updateTexts(lang) {
    const t = translations[lang];
    document.getElementById('job-list-title').textContent = t.jobListTitle;
    document.getElementById('job-list-subtitle').textContent = t.jobListSubtitle;
    document.getElementById('masazysta-title').textContent = t.masazystaTitle;
    document.getElementById('masazysta-salary').textContent = t.masazystaSalary;
    document.getElementById('admin-title').textContent = t.adminTitle;
    document.getElementById('admin-salary').textContent = t.adminSalary;
    document.getElementById('back-to-list-text').textContent = t.backToList;

    if (currentJob) {
      const jobData = t[currentJob];
      document.getElementById('job-title').textContent = jobData.title;
      document.getElementById('job-subtitle').textContent = jobData.subtitle;
      document.getElementById('duties-title').textContent = jobData.dutiesTitle;
      document.getElementById('requirements-title').textContent = jobData.requirementsTitle;
      document.getElementById('conditions-title').textContent = jobData.conditionsTitle;
      document.getElementById('about-title').textContent = jobData.aboutTitle;
      document.getElementById('about-text').textContent = jobData.aboutText;
      document.getElementById('call-to-action').textContent = t.callToAction;

      let animationIndex = 0;
      animationIndex = updateList('duties-list', jobData.duties, animationIndex);
      animationIndex = updateList('requirements-list', jobData.requirements, animationIndex);
      animationIndex = updateList('conditions-list', jobData.conditions, animationIndex);

      document.getElementById('requirements-title').style.display = jobData.requirements.length
        ? 'block'
        : 'none';
      document.getElementById('requirements-list').style.display = jobData.requirements.length
        ? 'block'
        : 'none';
      document.getElementById('about-title').style.display = jobData.aboutText
        ? 'block'
        : 'none';
      document.getElementById('about-text').style.display = jobData.aboutText
        ? 'block'
        : 'none';
    }
  }

  function updateList(listId, items, startIndex) {
    const list = document.getElementById(listId);
    list.innerHTML = '';
    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;
      li.style.setProperty('--i', startIndex + index + 1);
      list.appendChild(li);
    });
    return startIndex + items.length;
  }

  function showJob(jobId) {
    currentJob = jobId;
    document.getElementById('job-list').style.display = 'none';
    document.querySelector('.job-details-wrapper').classList.add('active');
    updateTexts(currentLang);
    const path = jobId === 'masazysta' ? '/masazysta' : '/administrator';
    try {
      window.history.pushState({ jobId }, '', path);
    } catch {}
  }

  function showJobList() {
    currentJob = null;
    document.getElementById('job-list').style.display = 'block';
    document.querySelector('.job-details-wrapper').classList.remove('active');
    updateTexts(currentLang);
    try {
      window.history.pushState({}, '', '/');
    } catch {}
  }

  function handlePath() {
    const path = window?.location?.pathname;
    if (path === '/masazysta') {
      showJob('masazysta');
    } else if (path === '/administrator') {
      showJob('admin');
    } else {
      showJobList();
    }
  }

  handlePath();
  updateActiveButton(currentLang);

  window.addEventListener('popstate', handlePath);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const newLang = btn.getAttribute('data-lang');
      if (newLang !== currentLang) {
        currentLang = newLang;
        updateTexts(currentLang);
        safeStorage.set('lang', currentLang);
        updateActiveButton(currentLang);
      }
    });
  });

  document.querySelectorAll('.job-item').forEach((item) => {
    item.addEventListener('click', () => {
      const jobId = item.getAttribute('data-job');
      showJob(jobId);
    });
  });

  document.getElementById('back-to-list').addEventListener('click', () => {
    showJobList();
  });

  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 10 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const safeStorage = {
  set: (k, v) => {
    try {
      localStorage.setItem(k, v);
    } catch {}
  },
  get: (k) => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  remove: (k) => {
    try {
      localStorage.removeItem(k);
    } catch {}
  },
};
