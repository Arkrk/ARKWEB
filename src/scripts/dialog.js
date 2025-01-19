const openButton = document.getElementById('openButton');
const modalDialog = document.getElementById('modalDialog');

// ボタンをクリックしてモーダルを開く
openButton?.addEventListener('click', async () => {
  modalDialog.showModal();
});

// 背景をクリックしてモーダルを閉じる
modalDialog.addEventListener('click', (event) => {
  if(event.target.closest('#dialogInputArea') === null) {
    modalDialog.close();
  }
});

const mediaQueryList = matchMedia('(min-width:801px)');

// 画面幅が801px以上になったらモーダルを閉じる
mediaQueryList.addEventListener('change', (e) => {
  if (e.matches) {
    modalDialog.close();
  }
});