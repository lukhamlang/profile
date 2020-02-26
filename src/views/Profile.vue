<template>
  <div class="container">
    <br />
    <br />

    <h1 class="text-center">Welcome to Profile</h1>
    <br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 style=" font-family: 'Prompt', sans-serif;">
            <b>หลู่ คำแหลง</b>
          </h1>
          <p>
            วันเกิด
            <b>25 พฤศจิกายน 2541</b>
          </p>
          <p>
            ส่วนสูง
            <b>172</b>
          </p>
          <p>
            น้ำหนัก
            <b>58</b>
          </p>
          <p>
            ความถนัด
            <b>เล่นกีฬา & เขียนโปรแกรม</b>
          </p>
          <p>
            ความชอบ
            <b>นายตัวเอง</b>
          </p>
          <p>
            เวลาว่าง
            <b>เขียนโปรแกรม</b>
          </p>
          <p>
            อุปนิสัยส่วนตัว
            <b>ไม่ค่อยพูดถ้าไม่รู้จัก</b>
          </p>
          <p>
            คติที่ยึดปฏิบัติ
            <b>อะไรที่ทำบ่อย อันนี้ย่อติดตัว</b>
          </p>
          <p>
            อนาคตอยากเป็น
            <b>Programmer</b>
          </p>

          <div>
            <p>ข้อมูลการติดต่อ</p>
            <b-button variant="primary" href="https://www.facebook.com/">facebook</b-button>
          </div>

          <p>กำลังศึกษา วิทยาการคอพิวเตอร์ มหาวิทยาลัยแม่โจ้ เชียงใหม่</p>
          <b-button
            variant="success"
            href="http://www.reg.mju.ac.th/registrar/home.asp"
          >Maejo University</b-button>
          <p></p>
          <p></p>
        </div>
        <div class="col">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/lukhamleang.appspot.com/o/Untitled-1.png?alt=media&token=9e603184-229d-4d7a-afe3-6d8ce992cff2"
            class="img-fluid"
            alt="Responsive image"
          />
        </div>
      </div>
      <div>
        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  I start opened because
                  <code>visible</code> is
                  <code>true</code>
                </b-card-text>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ texts }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
    <footer />
  </div>
</template>

<script>

export default {
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    };
  },
  components: {

  }
};
</script>
<style>
h1 {
  font-family: "Sigmar One", cursive;
}
</style>