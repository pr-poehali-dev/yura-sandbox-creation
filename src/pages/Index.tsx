import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [gameScore, setGameScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Память цветов",
      description: "Запомни последовательность цветов",
      type: "memory",
      difficulty: "easy",
      icon: "Palette",
    },
    {
      id: 2,
      title: "Коллекционер",
      description: "Собирай предметы и создавай коллекции",
      type: "collector",
      difficulty: "medium",
      icon: "Package",
    },
    {
      id: 3,
      title: "Мини-рисовалка",
      description: "Создавай пиксельные рисунки",
      type: "art",
      difficulty: "easy",
      icon: "Brush",
    },
    {
      id: 4,
      title: "Квест-головоломка",
      description: "Реши загадку и найди сокровище",
      type: "puzzle",
      difficulty: "hard",
      icon: "Map",
    },
  ];

  const portfolioItems = [
    {
      title: "Космический корабль",
      description: "3D модель исследовательского судна",
      image:
        "https://v3.fal.media/files/tiger/31753liMbO3Jjx2nSpkg6_output.png",
      tags: ["3D", "Space", "Design"],
    },
    {
      title: "Пиксельный лес",
      description: "Анимированная сцена природы",
      image:
        "https://v3.fal.media/files/tiger/31753liMbO3Jjx2nSpkg6_output.png",
      tags: ["Pixel Art", "Animation", "Nature"],
    },
    {
      title: "Мини-игра змейка",
      description: "Классическая игра в новом стиле",
      image:
        "https://v3.fal.media/files/tiger/31753liMbO3Jjx2nSpkg6_output.png",
      tags: ["Game", "Retro", "Classic"],
    },
  ];

  const startMemoryGame = () => {
    setIsPlaying(true);
    setGameScore(0);
    // Простая логика игры
    setTimeout(() => {
      setGameScore(Math.floor(Math.random() * 100) + 50);
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-8">
            <Icon name="Sparkles" size={20} className="text-amber-600" />
            <span className="text-amber-800 font-medium">
              Творческая песочница
            </span>
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            SANDBOX
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Место для экспериментов, творчества и создания удивительных
            проектов. Исследуй, играй, создавай!
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              onClick={() =>
                document
                  .getElementById("creative-zone")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать творить
            </Button>

            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Creative Zone */}
      <section id="creative-zone" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Творческая зона
            </h2>
            <p className="text-xl text-gray-600">
              Выбери проект и начни экспериментировать
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 ${
                  selectedProject === project.id.toString()
                    ? "border-amber-500 bg-amber-50"
                    : "border-gray-200 hover:border-amber-300"
                }`}
                onClick={() => setSelectedProject(project.id.toString())}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={project.icon}
                      size={32}
                      className="text-amber-600"
                    />
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge
                      variant={
                        project.difficulty === "easy"
                          ? "default"
                          : project.difficulty === "medium"
                            ? "secondary"
                            : "destructive"
                      }
                      className="text-xs"
                    >
                      {project.difficulty === "easy"
                        ? "Легко"
                        : project.difficulty === "medium"
                          ? "Средне"
                          : "Сложно"}
                    </Badge>
                    <Icon
                      name="ArrowRight"
                      size={16}
                      className="text-gray-400"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Game Demo */}
          {selectedProject && (
            <div className="mt-12 max-w-2xl mx-auto">
              <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">
                    Демо: Память цветов
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-16 h-16 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${
                          i === 1
                            ? "bg-red-400"
                            : i === 2
                              ? "bg-blue-400"
                              : i === 3
                                ? "bg-green-400"
                                : "bg-purple-400"
                        }`}
                        onClick={() => !isPlaying && startMemoryGame()}
                      />
                    ))}
                  </div>

                  {isPlaying && (
                    <div className="mb-6">
                      <Progress value={66} className="mb-2" />
                      <p className="text-sm text-gray-600">Играем...</p>
                    </div>
                  )}

                  <div className="flex justify-center items-center gap-4 mb-6">
                    <Icon name="Trophy" size={24} className="text-amber-600" />
                    <span className="text-2xl font-bold text-amber-700">
                      {gameScore}
                    </span>
                  </div>

                  <Button
                    onClick={startMemoryGame}
                    disabled={isPlaying}
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    {isPlaying ? "Играем..." : "Начать игру"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Портфолио</h2>
            <p className="text-xl text-gray-600">
              Коллекция созданных проектов и экспериментов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Icon
                      name="Eye"
                      size={32}
                      className="text-white opacity-0 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Создать новый проект
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-6 mb-6">
            <Icon name="Gamepad2" size={24} />
            <Icon name="Palette" size={24} />
            <Icon name="Sparkles" size={24} />
          </div>
          <p className="text-amber-100">
            © 2024 Sandbox. Место для творчества и экспериментов.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
