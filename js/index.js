
function body3() {
    $('.click-eve').html('')
    $('.body3-data-box').html('')
    $('.body3-data-img').html('')
    $.each(item, (index, items) => {
        $('.click-eve').append(`
        <span id="${items}" class="no-click px-4 py-1 ${items === clicks ? 'click' : ''}"  onclick="ws_click(event)">${items}</span>
        `)
    })
    const currentItem = item_data[clicks]
    $('.body3-data-box').append(`
        <div>
            ${currentItem.title}
            </div>
            <div class="my-3">
                <ul style="list-style-type: none;" class="p-0">
                    <li class="mb-2"><img src="./images/勾勾.svg" alt="" style="width: 15px;" class="me-2">${currentItem.text_1}</li>
                    <li class="mb-2"><img src="./images/勾勾.svg" alt="" style="width: 15px;" class="me-2">${currentItem.text_2}</li>
                    <li class="mb-2"><img src="./images/勾勾.svg" alt="" style="width: 15px;" class="me-2">${currentItem.text_3}</li>
                </ul>
            </div>
            <div>
                ${currentItem.footer}
            </div>
        </div>
        `)
    $('.body3-data-img').append(`
        <img src="${currentItem.img}" alt="" class="rounded body3-img">
        `)
}

function ws_click(e) {
    clicks = e.target.id
    body3()
}
body3()