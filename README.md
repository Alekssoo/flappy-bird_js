# flappy-bird_js
mini-game on JS

ФУНКЦИОНАЛЬНЫЕ ТРЕБОВАНИЯ

Птица не должна улетать за границы поля. Если птица касается земли, игра заканчивается, если «потолка» — игра продолжается.
Если птица касается трубы, игра заканчивается.
При клике на окно игры птица подлетает вверх на высоту, равную половине высоты свободного промежутка в трубе.
При бездействии игрока птица падает с ускорением.
Свободный промежуток в трубе занимает 25 % высоты трубы.
Высота птицы составляет 20 % от высоты свободного промежутка в трубе.
Ширина трубы вдвое больше ширины птицы.
Расстояние между трубами равно ширине трёх труб.
Птица двигается с такой скоростью, что новые трубы появляются каждую секунду.
Подсчитывается текущее количество баллов. Оно увеличивается, когда птица преодолевает середину свободного промежутка в трубе.
Лучший результат игрока (максимальное количество набранных баллов) сохраняется в localStorage и отображается под текущим количеством баллов, если игра запускается не в первый раз.
Птица анимирована (вращается при движении в сторону полёта).

ТРЕБОВАНИЯ К ИНТЕРФЕЙСУ

должен содержать:
окно с игрой,
окно с текущими баллами и лучшим результатом, если игра запускается не впервые,
кнопку запуска или перезапуска после завершения игры.

ТРЕБОВАНИЯ К КОДУ

Используйте классический JavaScript без дополнительных библиотек.
Давайте переменным, классам и функциям осмысленные имена.
Правильно используйте отступы.
Применяйте ООП на ES6-классах.
Следуйте принципам DRY (Don’t Repeat Yourself) и KISS (Keep It Short and Simple).
Сделайте обработку получения очков и логику игры независимой от используемого метода отображения игры и используемой в игре физики.
Вынесите в отдельный класс логику расчёта отрисовки на канвасе, чтобы можно было, например, заменить отрисовку на канвасе на отрисовку в DOM без изменения кода самой игры, просто поменяв класс, отвечающий за отрисовку.
Вынесите в отдельный класс логику падения птицы, чтобы, если понадобится более сложная и реалистичная логика расчёта механики птицы, можно было заменить класс, отвечающий за эту логику, и не переписывать остальной код (например, если в будущем мы захотим использовать какой-нибудь физический движок). 
Вынесите константы в отдельный файл конфига, разбейте их на логические блоки.
Грамотно разбейте проект на файлы, продумайте и реализуйте их структуру.
