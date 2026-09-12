START

Set angkaRahasia secara acak
Set jumlahPercobaan = 0
Set maksimalPercobaan = 5

WHILE jumlahPercobaan < maksimalPercobaan

    Minta pengguna memasukkan tebakan
    Tambahkan 1 ke jumlahPercobaan

    IF tebakan = angkaRahasia THEN
        Tampilkan "Tebakan benar!"
        Tampilkan jumlahPercobaan
        Tampilkan "Kamu menang!"
        STOP
    ELSE IF tebakan < angkaRahasia THEN
        Tampilkan "Terlalu kecil"
    ELSE
        Tampilkan "Terlalu besar"
    END IF

    Tampilkan sisa percobaan

END WHILE

Tampilkan "Kesempatan habis"
Tampilkan "Kamu kalah"
Tampilkan angkaRahasia

END
