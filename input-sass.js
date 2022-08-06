const { exec } = require('child_process');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('sassをコンパイルしますか？ (y/n) [y]:', (result) => {
  if (result === 'n') {
    console.log('\n\n---------------------------------\n\n');
    console.log('sassのコンパイル無しでStartします');
    console.log('\u001b[32m\n\n==== Start Lesson !!!! ====\u001b[0m\n\n');
    console.log('終了する場合は ctrl/c を2回押してね');
    console.log('\n\n---------------------------------\n\n');
    exec('npx reload -b');
    return;
  }

  readline.question('Lesson番号は？ :', (result2) => {
    if (!result2) {
      console.log('最初からやり直してください');
      process.exit(1);
    }
    console.log('\n\n---------------------------------\n\n');
    console.log(
      `\u001b[33mLesson ${result2}\u001b[0m : \u001b[32m==== Start Lesson !!!! ====\u001b[0m\n\n`,
    );
    console.log('終了する場合は ctrl/c を2回押してね');
    console.log('\n\n---------------------------------\n\n');
    exec(
      `npx sass src/Lessons/Lesson${result2}/src/style.scss:src/Lessons/Lesson${result2}/styles/style.css --watch --no-source-map`,
    );
    exec('npx reload -b');
  });
});
