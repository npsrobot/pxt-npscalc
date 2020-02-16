/**
 * สร้างบล็อกคำสั่งด้วยภาษา Javascript  
 * Amnart P.
 * NPS ROBOTICS COMPUTER RAYONG  
 * https://www.facebook.com/NPSProgrammerRayong/
 */

enum npsOper {
    //% block="บวก"
    op1,
    //% block="ลบ"
    op2,
    //% block="คูณ"
    op3,
    //% block="หาร"
    op4,
    //% block="ยกกำลัง"
    op5,
    //% block="mod"
    op6
}

//% block="microbit:Rayong" weight=150 color=#1111ff icon="\uf17b"
namespace microbitRayong {
    /**
     * โปรแกรมบวกเลข 2 จำนวน
     * เลือกตัวเลขตั้งแต่ 0-10
     */
    //% block="บวกเลข ตัวตั้ง %v1| ตัวบวก %v2"
    //% v1.min=0 v1.max=10 v2.min=0 v2.max=10
    //% weight=100 color=#1111ff 
    export function plusNumber(v1: number, v2: number): void {
        basic.showNumber(v1 + v2)
    }

    //% blockId="Calculator" block="หาผลลัพธ์ของ %v1| %npsOper | %v2"
    //% weight=90
    export function Calculate(v1: number, o: npsOper, v2: number): void {
        if (o == npsOper.op1) {
            basic.showNumber(v1 + v2)
        }
        if (o == npsOper.op2) {
            basic.showNumber(v1 - v2)
        }
        if (o == npsOper.op3) {
            basic.showNumber(v1 * v2)
        }
        if (o == npsOper.op4) {
            basic.showNumber(v1 / v2)
        }
        if (o == npsOper.op5) {
            basic.showNumber(v1 ** v2)
        }
        if (o == npsOper.op6) {
            basic.showNumber(v1 % v2)
        }
    }
}


