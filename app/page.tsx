"use client";

import { useState } from 'react';

const translations = {
  zh: {
    title: 'ADHD 支持中心',
    subtitle: '家庭-学校-社区支持平台',
    student: '学生',
    studentDesc: '通过交互式游戏和任务练习社交技能。',
    parent: '家长',
    parentDesc: '通过日常策略和实时进度跟踪支持孩子。',
    teacher: '教师',
    teacherDesc: '监测行为模式并提供全面的课堂支持工具。',
    getStarted: '开始使用 →',
    ready: '准备好产生影响吗？',
    join: '立即加入我们的支持社区',
    explore: '探索平台',
    backToHome: '返回主界面',
    dashboardTitle: '学生仪表板',
    dashboardSubtitle: '通过日常任务和活动练习社交技能',
    todayProgress: '今日进度',
    dailyTasks: '日常任务',
    socialSkillsGames: '社交技能游戏',
    rewards: '奖励',
    youEarned: '你今天赚得',
    points: '分',
    pointsReward: '当前 5 级奖励',
    startButton: '开始',
    completeButton: '完成',
    gameCard1: '轮流游戏',
    gameCard1Desc: '学习等待和尊重他人的机会',
    gameCard2: '情绪匹配',
    gameCard2Desc: '识别和匹配不同的情绪表达',
    task1: '等待你的转机',
    task2: '使用礼貌用语',
    task3: '感到沮丧时保持冷静',
    progressSync: '进度同步',
    homeUpdate: '家庭更新',
    schoolNote: '学校记录',
    todaysFocus: '今日焦点',
    lastUpdated: '最后更新',
    today: '今天',
    pm: '下午',
    parentNote: '家长备注',
    teacherNote: '教师备注',
    homeLabel: '家庭：',
    schoolLabel: '学校：',
    needsAttentionLabel: '关注：',
    neededReminder: '需要一次提醒后等待',
    stillNeedsSupport: '仍需情绪控制支持',
    waitYourTurn: '等待你的转机',
    usePoliteWords: '使用礼貌用语',
    progressUpdated: '✔ 进度已更新并与家长和教师同步',
    collaborationView: '协作视图',
    sharedUpdates: '来自家庭和学校的共享更新',
    collaborationSummary: '协同支持摘要',
    syncStatus: '同步状态',
    currentSummary: '当前摘要',
    currentHomeSummary: '在晚餐时练习了等待',
    currentSchoolSummary: '课堂轮流能力有所提升',
    currentNeedsAttention: '情绪控制',
    practiceWaitingHome: '今晚在一次家庭活动中练习等待',
    useSharedReminder: '明天使用一个共享提醒短语',
    nextStep: '下一步',
    updatedThisWeek: '本周更新',
    parentAccountConnected: '家长账户已连接',
    teacherDashboardConnected: '教师仪表板已连接',
    connected: '已连接',
    roleParent: '家长模式',
    roleTeacher: '教师模式',
    addUpdate: '添加更新',
    addObservation: '添加观察',
    saveToHistory: '保存到历史',
    homeUpdatePlaceholder: '描述在家发生的情况...', 
    schoolNotePlaceholder: '描述课堂行为...',
    updateSynced: '✔ 更新已成功同步',
    noUpdatesYet: '暂无更新',
    turnQuestions: [
      {
        question: '如果另一位同学正在说话，你应该怎么做？',
        options: ['立即打断', '等待你的转机', '走开'],
        answer: 1,
      },
      {
        question: '当轮到你发言时，你应该怎样做？',
        options: ['快速说完就好', '注意倾听并礼貌回应', '不说话就好了'],
        answer: 1,
      },
      {
        question: '如果你听不懂对方的意思，你应该？',
        options: ['大声喊他重复', '礼貌询问并耐心等待', '直接离开'],
        answer: 1,
      },
    ],
    emotionQuestions: [
      {
        question: '这个表情是 😊，它代表什么情绪？',
        options: ['开心', '生气', '难过'],
        answer: 0,
      },
      {
        question: '这个表情是 😠，它代表什么情绪？',
        options: ['开心', '生气', '难过'],
        answer: 1,
      },
      {
        question: '这个表情是 😢，它代表什么情绪？',
        options: ['开心', '生气', '难过'],
        answer: 2,
      },
    ],
    quizCorrect: '回答正确！奖励 +5 分。',
    quizWrong: '回答错误，请再试一次。',
    quizComplete: '您已完成此游戏！',
  },
  zht: {
    title: 'ADHD 支持中心',
    subtitle: '家庭-學校-社區支持平台',
    student: '學生',
    studentDesc: '透過互動式遊戲和任務練習社交技能。',
    parent: '家長',
    parentDesc: '透過日常策略和即時進度追蹤支持孩子。',
    teacher: '教師',
    teacherDesc: '監測行為模式並提供全面的課堂支持工具。',
    getStarted: '開始使用 →',
    ready: '準備好產生影響嗎？',
    join: '立即加入我們的支持社區',
    explore: '探索平台',
    backToHome: '返回主界面',
    dashboardTitle: '學生儀表板',
    dashboardSubtitle: '透過日常任務和活動練習社交技能',
    todayProgress: '今日進度',
    dailyTasks: '日常任務',
    socialSkillsGames: '社交技能遊戲',
    rewards: '獎勵',
    youEarned: '你今天賺得',
    points: '分',
    pointsReward: '目前 5 級獎勵',
    startButton: '開始',
    completeButton: '完成',
    gameCard1: '輪流遊戲',
    gameCard1Desc: '學習等待和尊重他人的機會',
    gameCard2: '情緒匹配',
    gameCard2Desc: '識別和匹配不同的情緒表達',
    task1: '等待你的轉機',
    task2: '使用禮貌用語',
    task3: '感到沮喪時保持冷靜',
    progressSync: '進度同步',
    homeUpdate: '家庭更新',
    schoolNote: '學校記錄',
    parentAccountConnected: '家長帳戶已連接',
    teacherDashboardConnected: '教師儀表板已連接',
    connected: '已連接',
    todaysFocus: '今日焦點',
    syncStatus: '同步狀態',
    collaborationSummary: '協同支持摘要',
    currentSummary: '當前摘要',
    currentHomeSummary: '在晚餐時練習了等待',
    currentSchoolSummary: '課堂輪流能力有所提升',
    currentNeedsAttention: '情緒控制',
    practiceWaitingHome: '今晚在一次家庭活動中練習等待',
    useSharedReminder: '明天使用一個共享提醒短語',
    nextStep: '下一步',
    updatedThisWeek: '本週更新',
    lastUpdated: '最後更新',
    today: '今天',
    pm: '下午',
    parentNote: '家長備註',
    teacherNote: '教師備註',
    homeLabel: '家庭：',
    schoolLabel: '學校：',
    needsAttentionLabel: '關注：',
    neededReminder: '需要一次提醒後等待',
    stillNeedsSupport: '仍需情緒控制支持',
    waitYourTurn: '等待你的轉機',
    usePoliteWords: '使用禮貌用語',
    progressUpdated: '✔ 進度已更新並與家長和教師同步',
    collaborationView: '協作視圖',
    sharedUpdates: '來自家庭和學校的共享更新',
    roleParent: '家長模式',
    roleTeacher: '教師模式',
    addUpdate: '添加更新',
    addObservation: '添加觀察',
    saveToHistory: '保存到歷史',
    homeUpdatePlaceholder: '描述在家發生的情況...', 
    schoolNotePlaceholder: '描述課堂行為...',
    updateSynced: '✔ 更新已成功同步',
    noUpdatesYet: '暫無更新',    turnQuestions: [
      {
        question: '如果另一位同學正在說話，您應該怎麼做？',
        options: ['立即打斷', '等待您的轉機', '走開'],
        answer: 1,
      },
      {
        question: '當輪到您發言時，您應該怎樣做？',
        options: ['快速說完就好', '注意傾聽並禮貌回應', '不說話就好'],
        answer: 1,
      },
      {
        question: '如果您聽不懂對方的意思，您應該？',
        options: ['大聲喊他重複', '禮貌詢問並耐心等待', '直接離開'],
        answer: 1,
      },
    ],
    emotionQuestions: [
      {
        question: '這個表情是 😊，它代表什麼情緒？',
        options: ['開心', '生氣', '難過'],
        answer: 0,
      },
      {
        question: '這個表情是 😠，它代表什麼情緒？',
        options: ['開心', '生氣', '難過'],
        answer: 1,
      },
      {
        question: '這個表情是 😢，它代表什麼情緒？',
        options: ['開心', '生氣', '難過'],
        answer: 2,
      },
    ],
    quizCorrect: '回答正確！獎勵 +5 分。',
    quizWrong: '回答錯誤，請再試一次。',
    quizComplete: '您已完成此遊戲！',
  },
  en: {
    title: 'ADHD Support Hub',
    subtitle: 'Home–School–Community Support Platform',
    student: 'Student',
    studentDesc: 'Practice social skills through interactive games and engaging tasks.',
    parent: 'Parent',
    parentDesc: 'Support your children with daily strategies and real-time progress tracking.',
    teacher: 'Teacher',
    teacherDesc: 'Monitor behavior patterns and provide comprehensive classroom support tools.',
    getStarted: 'Get Started →',
    ready: 'Ready to make a difference?',
    join: 'Join our community of support today',
    explore: 'Explore Platform',
    backToHome: 'Back to Home',
    dashboardTitle: 'Student Dashboard',
    dashboardSubtitle: 'Practice social skills through daily tasks and activities',
    todayProgress: "Today's Progress",
    dailyTasks: 'Daily Tasks',
    socialSkillsGames: 'Social Skills Games',
    rewards: 'Rewards',
    youEarned: 'You earned',
    points: 'points',
    pointsReward: 'Level 5 Reward Status',
    startButton: 'Start',
    completeButton: 'Complete',
    gameCard1: 'Turn-Taking Game',
    gameCard1Desc: 'Learn to wait and respect others\' turns',
    gameCard2: 'Emotion Matching',
    gameCard2Desc: 'Identify and match different emotions',
    task1: 'Wait for your turn',
    task2: 'Use polite words',
    task3: 'Stay calm when frustrated',
    progressSync: 'Progress Sync',
    homeUpdate: 'Home Update',
    schoolNote: 'School Note',
    parentAccountConnected: 'Parent account connected',
    teacherDashboardConnected: 'Teacher dashboard connected',
    connected: 'Connected',
    todaysFocus: "Today's focus",
    syncStatus: 'Sync status',
    collaborationSummary: 'Support Coordination Summary',
    currentSummary: 'Current Summary',
    currentHomeSummary: 'Practiced during dinner',
    currentSchoolSummary: 'Improved turn-taking in class',
    currentNeedsAttention: 'Emotional control',
    practiceWaitingHome: 'Practice waiting in one home activity tonight',
    useSharedReminder: 'Use one shared reminder phrase tomorrow',
    nextStep: 'Next step',
    updatedThisWeek: 'Updated this week',
    lastUpdated: 'Last updated',
    today: 'Today',
    pm: 'PM',
    parentNote: 'Parent note',
    teacherNote: 'Teacher note',
    homeLabel: 'Home:',
    schoolLabel: 'School:',
    needsAttentionLabel: 'Needs attention:',
    neededReminder: 'Needed one reminder before waiting',
    stillNeedsSupport: 'Still needs support with emotional control',
    waitYourTurn: 'Wait your turn',
    usePoliteWords: 'Use polite words',
    collaborationView: 'Collaboration View',
    sharedUpdates: 'Shared updates from home and school',
    roleParent: 'Parent Mode',
    roleTeacher: 'Teacher Mode',
    addUpdate: 'Add Update',
    addObservation: 'Add Observation',
    saveToHistory: 'Save to History',
    homeUpdatePlaceholder: 'Describe what happened at home...', 
    schoolNotePlaceholder: 'Describe classroom behavior...',
    updateSynced: '✔ Update synced successfully',
    noUpdatesYet: 'No updates yet',
    turnQuestions: [
      {
        question: 'If another student is speaking, what should you do?',
        options: ['Interrupt immediately', 'Wait for your turn', 'Walk away'],
        answer: 1,
      },
      {
        question: 'When it is your turn, you should?',
        options: ['Speak quickly', 'Listen carefully and respond politely', 'Say nothing'],
        answer: 1,
      },
      {
        question: 'If you do not understand, you should?',
        options: ['Yell to repeat', 'Ask politely and wait', 'Leave'],
        answer: 1,
      },
    ],
    emotionQuestions: [
      {
        question: 'This face is 😊. What emotion is it?',
        options: ['Happy', 'Angry', 'Sad'],
        answer: 0,
      },
      {
        question: 'This face is 😠. What emotion is it?',
        options: ['Happy', 'Angry', 'Sad'],
        answer: 1,
      },
      {
        question: 'This face is 😢. What emotion is it?',
        options: ['Happy', 'Angry', 'Sad'],
        answer: 2,
      },
    ],
    quizCorrect: 'Correct! +5 points',
    quizWrong: 'Incorrect, try again.',
    quizComplete: 'You finished this game! Great job.',
  },
};

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [showDashboard, setShowDashboard] = useState(false);
  const [showCollaboration, setShowCollaboration] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, completed: true },
    { id: 2, completed: false },
    { id: 3, completed: true },
  ]);
  const [turnQuizCompleted, setTurnQuizCompleted] = useState(false);
  const [emotionQuizCompleted, setEmotionQuizCompleted] = useState(false);
  const [turnQuizStep, setTurnQuizStep] = useState(0);
  const [emotionQuizStep, setEmotionQuizStep] = useState(0);
  const [activeGame, setActiveGame] = useState<'turn-taking' | 'emotion' | null>(null);
  const [quizFeedback, setQuizFeedback] = useState('');
  const [rewardPoints, setRewardPoints] = useState(10);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showProgressUpdateMessage, setShowProgressUpdateMessage] = useState(false);


  const [collabRole, setCollabRole] = useState<'parent' | 'teacher'>('parent');
  const [homeUpdateInput, setHomeUpdateInput] = useState('');
  const [parentNoteInput, setParentNoteInput] = useState('');
  const [schoolNoteInput, setSchoolNoteInput] = useState('');
  const [teacherNoteInput, setTeacherNoteInput] = useState('');
  const [homeUpdates, setHomeUpdates] = useState<Array<{time: string; content: string}>>([]);
  const [schoolNotes, setSchoolNotes] = useState<Array<{time: string; content: string}>>([]);
  const [collabFeedback, setCollabFeedback] = useState('');

  const t = translations[language as keyof typeof translations];

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(t => t.completed).length;
  const progressPercentage = (completedTasks / tasks.length) * 100;
  const stars = Array.from({ length: 3 }, (_, i) => i < completedTasks);

  const turnQuestions = t.turnQuestions;

  const emotionQuestions = t.emotionQuestions;

  const handleGameAnswer = (optionIndex: number, game: 'turn-taking' | 'emotion') => {
    if (game === 'turn-taking') {
      const current = turnQuestions[turnQuizStep];
      if (optionIndex === current.answer) {
        const nextStep = turnQuizStep + 1;
        setRewardPoints((prev) => prev + 5);
        if (nextStep < turnQuestions.length) {
          setQuizFeedback(t.quizCorrect);
          setTurnQuizStep(nextStep);
        } else {
          setQuizFeedback(t.quizComplete);
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 1500);
          if (!turnQuizCompleted) {
            setTurnQuizCompleted(true);
            setTasks((prev) =>
              prev.map((task) =>
                task.id === 1 ? { ...task, completed: true } : task
              )
            );
          }
          setTurnQuizStep(0);
          setActiveGame(null);
          setShowProgressUpdateMessage(true);
          setTimeout(() => setShowProgressUpdateMessage(false), 3000);
        }
      } else {
        setQuizFeedback(t.quizWrong);
      }
    } else {
      const current = emotionQuestions[emotionQuizStep];
      if (optionIndex === current.answer) {
        const nextStep = emotionQuizStep + 1;
        setRewardPoints((prev) => prev + 5);
        if (nextStep < emotionQuestions.length) {
          setQuizFeedback(t.quizCorrect);
          setEmotionQuizStep(nextStep);
        } else {
          setQuizFeedback(t.quizComplete);
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 1500);
          if (!emotionQuizCompleted) {
            setEmotionQuizCompleted(true);
            setTasks((prev) =>
              prev.map((task) =>
                task.id === 2 ? { ...task, completed: true } : task
              )
            );
          }
          setEmotionQuizStep(0);
          setActiveGame(null);
          setShowProgressUpdateMessage(true);
          setTimeout(() => setShowProgressUpdateMessage(false), 3000);
        }
      } else {
        setQuizFeedback(t.quizWrong);
      }
    }
  };

  const handleAddHomeUpdate = () => {
    if (!homeUpdateInput.trim()) return;
    const newUpdate = { time: new Date().toLocaleTimeString(), content: homeUpdateInput.trim() };
    setHomeUpdates((prev) => [newUpdate, ...prev]);
    setHomeUpdateInput('');
    setCollabFeedback(t.updateSynced);
    setTimeout(() => setCollabFeedback(''), 2500);
  };

  const handleAddSchoolNote = () => {
    if (!schoolNoteInput.trim()) return;
    const newNote = { time: new Date().toLocaleTimeString(), content: schoolNoteInput.trim() };
    setSchoolNotes((prev) => [newNote, ...prev]);
    setSchoolNoteInput('');
    setCollabFeedback(t.updateSynced);
    setTimeout(() => setCollabFeedback(''), 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 md:p-12">
      
      {/* Language Selector - Top Right */}
      <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
        {/* Back Button */}
        {showDashboard && (
          <button
            onClick={() => setShowDashboard(false)}
            className="flex items-center gap-2 px-6 py-2 rounded-lg font-semibold bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.backToHome}
          </button>
        )}
        <div />
        {/* Language Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setLanguage('zh')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              language === 'zh'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            简体中文
          </button>
          <button
            onClick={() => setLanguage('zht')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              language === 'zht'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            繁体中文
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              language === 'en'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            English
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* MAIN HOME PAGE */}
        {!showDashboard && !showCollaboration ? (
          <>
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-20">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
                {t.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-2">
                {t.subtitle}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">

              {/* Student Card */}
              <button
                onClick={() => setShowDashboard(true)}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-200 group-hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="text-5xl mb-4">🎮</div>
                  <h2 className="text-2xl font-bold text-blue-700 mb-3 group-hover:text-blue-900 transition-colors">
                    {t.student}
                  </h2>
                  <p className="text-gray-600 group-hover:text-gray-800 mb-6 leading-relaxed transition-colors">
                    {t.studentDesc}
                  </p>
                  <div className="w-full bg-blue-600 group-hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors duration-300 text-center">
                    {t.getStarted}
                  </div>
                </div>
              </button>

              {/* Collaboration Card */}
              <button
                onClick={() => {
                  setShowDashboard(false);
                  setShowCollaboration(true);
                }}
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-3xl shadow-lg border border-purple-200 group-hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="text-5xl mb-4">🤝</div>
                  <h2 className="text-2xl font-bold text-purple-700 mb-3 group-hover:text-purple-900 transition-colors">
                    {t.collaborationView}
                  </h2>
                  <p className="text-gray-600 group-hover:text-gray-800 mb-6 leading-relaxed transition-colors">
                    {t.sharedUpdates}
                  </p>
                  <div className="w-full bg-purple-600 group-hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors duration-300 text-center">
                    {t.getStarted}
                  </div>
                </div>
              </button>

            </div>

            {/* Bottom CTA Section */}
            <div className="text-center mt-16 p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.ready}</h3>
              <p className="text-gray-600 mb-6">{t.join}</p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                {t.explore}
              </button>
            </div>
          </>
        ) : showDashboard ? (
          <>
            {/* STUDENT DASHBOARD PAGE */}
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                {t.dashboardTitle}
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                {t.dashboardSubtitle}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Today's Progress Section */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.todayProgress}</h2>
                  
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-600 font-semibold">{completedTasks}/{tasks.length}</span>
                      <span className="text-gray-600">{Math.round(progressPercentage)}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-2 justify-center py-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
                    {stars.map((filled, i) => (
                      <span key={i} className="text-4xl">
                        {filled ? '⭐' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Daily Tasks Section */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.dailyTasks}</h2>
                  
                  <div className="space-y-4">
                    {[
                      { id: 1, text: t.task1 },
                      { id: 2, text: t.task2 },
                      { id: 3, text: t.task3 },
                    ].map((task) => {
                      const taskData = tasks.find((item) => item.id === task.id);
                      return (
                        <button
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 border-2 ${
                            taskData?.completed
                              ? 'bg-green-50 border-green-300'
                              : 'bg-white border-gray-200 hover:border-purple-300'
                          }`}
                        >
                          <div className={`flex-shrink-0 w-7 h-7 rounded-lg border-2 transition-all ${
                            taskData?.completed
                              ? 'bg-green-500 border-green-500'
                              : 'border-gray-400'
                          }`}>
                            {taskData?.completed && (
                              <svg className="w-full h-full text-white p-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L7 13.086l8.293-8.293a1 1 0 011.414 0z" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-lg font-semibold ${
                            taskData?.completed ? 'text-green-700' : 'text-gray-700'
                          }`}>
                            {task.text}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-8">
                
                {/* Social Skills Games */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.socialSkillsGames}</h2>
                  
                  <div className="space-y-4">
                    {/* Game 1 */}
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="text-4xl mb-3">🎮</div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{t.gameCard1}</h3>
                      <p className="text-blue-700 text-sm mb-4">{t.gameCard1Desc}</p>
                      <button
                        onClick={() => {
                          setActiveGame('turn-taking');
                          setQuizFeedback('');
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition-colors duration-300"
                      >
                        {t.startButton}
                      </button>
                    </div>

                    {/* Game 2 */}
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="text-4xl mb-3">😊</div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">{t.gameCard2}</h3>
                      <p className="text-purple-700 text-sm mb-4">{t.gameCard2Desc}</p>
                      <button
                        onClick={() => {
                          setActiveGame('emotion');
                          setQuizFeedback('');
                        }}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition-colors duration-300"
                      >
                        {t.startButton}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rewards Section */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-lg border border-amber-200">
                  <h2 className="text-2xl font-bold text-amber-900 mb-6">{t.rewards}</h2>
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-amber-600 mb-2">{rewardPoints}</div>
                    <p className="text-amber-900 font-semibold">{t.youEarned} {rewardPoints} {t.points}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 text-center">
                    <div className="text-4xl mb-2">🏆</div>
                    <p className="text-gray-800 font-semibold text-sm">{t.pointsReward}</p>
                  </div>
                  {showProgressUpdateMessage && (
                    <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-3 text-green-700 text-sm font-medium">
                      {t.quizComplete}
                    </div>
                  )}
                </div>

                {activeGame && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100 rounded-3xl p-6 shadow-2xl max-w-lg w-full border border-indigo-100">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-indigo-700">{activeGame === 'turn-taking' ? 'Turn-Taking Quiz' : 'Emotion Quiz'}</h3>
                        <button onClick={() => setActiveGame(null)} className="text-indigo-500 hover:text-indigo-700">✕</button>
                      </div>

                      {activeGame === 'turn-taking' ? (
                        <>
                          <p className="mb-4 font-medium">{turnQuestions[turnQuizStep].question}</p>
                          <div className="space-y-2">
                            {turnQuestions[turnQuizStep].options.map((option, index) => (
                              <button
                                key={option}
                                onClick={() => handleGameAnswer(index, 'turn-taking')}
                                className="w-full border border-gray-300 rounded-lg p-3 text-left hover:bg-gray-50"
                              >
                                {index + 1}. {option}
                              </button>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="mb-4 font-medium">{emotionQuestions[emotionQuizStep].question}</p>
                          <div className="space-y-2">
                            {emotionQuestions[emotionQuizStep].options.map((option, index) => (
                              <button
                                key={option}
                                onClick={() => handleGameAnswer(index, 'emotion')}
                                className="w-full border border-gray-300 rounded-lg p-3 text-left hover:bg-gray-50"
                              >
                                {index + 1}. {option}
                              </button>
                            ))}
                          </div>
                        </>
                      )}

                      {quizFeedback && <p className="mt-4 text-center font-semibold text-green-600">{quizFeedback}</p>}
                      {showEasterEgg && (
                        <div className="mt-4 relative h-28 overflow-hidden">
                          {[...Array(14)].map((_, idx) => (
                            <span
                              key={idx}
                              className="absolute h-10 w-1.5 rounded-full bg-gradient-to-b from-pink-500 via-fuchsia-400 to-blue-400 opacity-90 animate-ribbon"
                              style={{
                                left: `${(idx * 7) % 100}%`,
                                animationDelay: `${(idx * 0.1).toFixed(1)}s`,
                                transform: `rotate(${(idx % 3) * 25 - 15}deg)`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                      <div className="mt-4 text-right">
                        <button onClick={() => setActiveGame(null)} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Close</button>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>


          </>
        ) : showCollaboration ? (
          <>
            {/* COLLABORATION VIEW PAGE */}
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                {t.collaborationView}
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                {t.sharedUpdates}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-4"></div>
            </div>

            {/* Collaboration Sections */}
            <div className="mb-6 flex gap-3 justify-center">
              <button
                onClick={() => setCollabRole('parent')}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  collabRole === 'parent'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {t.roleParent}
              </button>
              <button
                onClick={() => setCollabRole('teacher')}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  collabRole === 'teacher'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {t.roleTeacher}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Support Coordination Summary */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.collaborationSummary}</h2>
                <div className="space-y-4 text-gray-700 text-sm">
                  {/* Today's Focus */}
                  <div className="rounded-2xl bg-blue-50 p-4 border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">{t.todaysFocus}</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        <span>{t.waitYourTurn}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        <span>{t.usePoliteWords}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sync Status */}
                  <div className="rounded-2xl bg-blue-50 p-4 border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">{t.syncStatus}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-gray-800">
                        <span>{t.parentAccountConnected}</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{t.connected || 'Connected'}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-800">
                        <span>{t.teacherDashboardConnected}</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{t.connected || 'Connected'}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-500 text-xs">
                        <span>{t.lastUpdated}</span>
                        <span>{t.today}, 4:30 {t.pm}</span>
                      </div>
                    </div>
                  </div>

                  {/* Current Summary */}
                  <div className="rounded-2xl bg-blue-50 p-4 border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">{t.currentSummary}</p>
                    <div className="space-y-1 text-gray-800 text-sm">
                      <p><span className="font-medium">{t.homeLabel}</span> {t.currentHomeSummary}</p>
                      <p><span className="font-medium">{t.schoolLabel}</span> {t.currentSchoolSummary}</p>
                      <p><span className="font-medium">{t.needsAttentionLabel}</span> {t.currentNeedsAttention}</p>
                    </div>
                  </div>

                  {/* Next Step */}
                  <div className="rounded-2xl bg-blue-50 p-4 border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">{t.nextStep}</p>
                    <ul className="space-y-1 text-gray-800 text-sm list-disc list-inside">
                      <li>{t.practiceWaitingHome}</li>
                      <li>{t.useSharedReminder}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Home Update */}
              <div className={`bg-white rounded-3xl p-6 shadow-lg border ${collabRole === 'teacher' ? 'border-gray-200 opacity-50' : 'border-purple-100'}`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.homeUpdate}</h2>
                <div className="space-y-3">
                  <textarea
                    value={homeUpdateInput}
                    onChange={(e) => setHomeUpdateInput(e.target.value)}
                    disabled={collabRole !== 'parent'}
                    placeholder={t.homeUpdatePlaceholder}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-gray-100"
                  />
                  <button
                    onClick={handleAddHomeUpdate}
                    disabled={collabRole !== 'parent' || !homeUpdateInput.trim()}
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t.addUpdate}
                  </button>

                  {parentNoteInput !== undefined && (
                    <input
                      value={parentNoteInput}
                      onChange={(e) => setParentNoteInput(e.target.value)}
                      placeholder={t.parentNote}
                      className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  )}

                  {homeUpdates.length === 0 ? (
                    <p className="text-sm text-gray-500">{t.noUpdatesYet}</p>
                  ) : (
                    <div className="max-h-48 overflow-y-auto space-y-2">
                      {homeUpdates.map((update, index) => (
                        <div key={index} className="flex items-start justify-between rounded-xl bg-purple-50 p-3 text-sm">
                          <div>
                            <p className="font-medium text-purple-700">{update.time}</p>
                            <p className="text-gray-700">{update.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* School Note */}
              <div className={`bg-white rounded-3xl p-6 shadow-lg border ${collabRole === 'parent' ? 'border-gray-200 opacity-50' : 'border-amber-100'}`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.schoolNote}</h2>
                <div className="space-y-3">
                  <textarea
                    value={schoolNoteInput}
                    onChange={(e) => setSchoolNoteInput(e.target.value)}
                    disabled={collabRole !== 'teacher'}
                    placeholder={t.schoolNotePlaceholder}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-gray-100"
                  />
                  <button
                    onClick={handleAddSchoolNote}
                    disabled={collabRole !== 'teacher' || !schoolNoteInput.trim()}
                    className="px-4 py-2 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t.addObservation}
                  </button>

                  {teacherNoteInput !== undefined && (
                    <input
                      value={teacherNoteInput}
                      onChange={(e) => setTeacherNoteInput(e.target.value)}
                      placeholder={t.teacherNote}
                      className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  )}

                  {schoolNotes.length === 0 ? (
                    <p className="text-sm text-gray-500">{t.noUpdatesYet}</p>
                  ) : (
                    <div className="max-h-48 overflow-y-auto space-y-2">
                      {schoolNotes.map((note, index) => (
                        <div key={index} className="flex items-start justify-between rounded-xl bg-amber-50 p-3 text-sm">
                          <div>
                            <p className="font-medium text-amber-700">{note.time}</p>
                            <p className="text-gray-700">{note.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {collabFeedback && (
              <div className="mt-4 text-center text-sm text-green-600 font-semibold">{collabFeedback}</div>
            )}

            <div className="max-w-6xl mx-auto mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setShowCollaboration(false);
                  setShowDashboard(false);
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>{t.backToHome}</span>
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
