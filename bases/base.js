const body = document.getElementById('body');
const lessonBody = document.getElementById('lessons');
const teachesBody = document.getElementById('teaches');

lessons.forEach((lesson) => {
  const div = document.createElement('div');
  div.className = 'hoge';

  const a = document.createElement('a');
  a.href = `src/Lessons/${lesson}/src/index.html`;

  const h3 = document.createElement('h3');
  h3.textContent = lesson;

  a.appendChild(h3);
  div.appendChild(a);
  lessonBody.appendChild(div);
});

teaches.forEach((lesson) => {
  const div = document.createElement('div');
  div.className = 'hoge';

  const a = document.createElement('a');
  a.href = `src/Teaches/${lesson}/src/index.html`;

  const h3 = document.createElement('h3');
  h3.textContent = lesson;

  a.appendChild(h3);
  div.appendChild(a);
  teachesBody.appendChild(div);
});
