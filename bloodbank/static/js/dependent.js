// Division Section select
function divisionsList() {
    // get value from division lists
    var diviList = document.getElementById('divisions').value;
        // set Rangpur division districts
    if (diviList == 'Rangpur') {
        var disctList = '<option disabled selected>Select Division</option><option value="Nilphamari">Nilphamari</option><option value="Rangpur">Rangpur</option><option value="Dinajpur">Dinajpur</option><option value="Gaibandha">Gaibandha</option><option value="Kurigram">Kurigram</option><option value="Lalmonirhat">Lalmonirhat</option><option value="Panchagarh">Panchagarh</option><option value="Thakurgaon">Thakurgaon</option>';
    }

    // set Dhaka division districts
   else if (diviList == 'Dhaka') {
        var disctList = '<option disabled selected>Select District</option><option value="Dhaka">Dhaka</option><option value="Faridpur">Faridpur</option><option value="Gazipur">Gazipur</option><option value="Gopalganj">Gopalganj</option><option value="Kishoreganj">Kishoreganj</option><option value="Madaripur">Madaripur</option><option value="Manikganj">Manikganj</option><option value="Munshiganj">Munshiganj</option><option value="Narayanganj">Narayanganj</option><option value="Narsingdi">Narsingdi</option><option value="Rajbari">Rajbari</option><option value="Shariatpur">Shariatpur</option><option value="Tangail">Tangail</option>';
    }
    // set Chattogram division districts
    else if (diviList == 'Chattogram') {
        var disctList = '<option disabled selected>Select Division</option><option value="Bandarban">Bandarban</option><option value="Chandpur">Chandpur</option><option value="Chattogram">Chattogram</option><option value="Cumilla">Cumilla</option><option value="Cox\'s Bazar">Cox\'s Bazar</option><option value="Feni">Feni</option><option value="Khagrachhari">Khagrachhari</option><option value="Noakhali">Noakhali</option><option value="Rangamati">Rangamati</option>';
    }
    // set Barishal division districts
    else if (diviList == 'Barishal') {
        var disctList = '<option disabled selected>Select District</option><option value="Barguna">Barguna</option><option value="Barishal">Barishal</option><option value="Bhola">Bhola</option><option value="Jhalokati">Jhalokati</option><option value="Patuakhali">Patuakhali</option><option value="Pirojpur">Pirojpur</option>';
    }
    // set Khulna division districts
    else if (diviList == 'Khulna') {
        var disctList = '<option disabled selected>Select Division</option><option value="Khulna">Khulna</option><option value="Bagerhat">Bagerhat</option><option value="Chuadanga">Chuadanga</option><option value="Jashore">Jashore</option><option value="Jhenaidah">Jhenaidah</option><option value="Kushtia">Kushtia</option><option value="Magura">Magura</option><option value="Meherpur">Meherpur</option><option value="Narail">Narail</option><option value="Satkhira">Satkhira</option>';
    }
    // set Mymensingh division districts
    else if (diviList == 'Mymensingh') {
        var disctList = '<option disabled selected>Select Division</option><option value="Mymensingh">Mymensingh</option><option value="Netrokona">Netrokona</option><option value="Jamalpur">Jamalpur</option><option value="Sherpur">Sherpur</option>';
    }
    // set Rajshahi division districts
    else if (diviList == 'Rajshahi') {
        var disctList = '<option disabled selected>Select Division</option><option value="Rajshahi">Rajshahi</option><option value="Bogra">Bogra</option><option value="Joypurhat">Joypurhat</option><option value="Naogaon">Naogaon</option><option value="Natore">Natore</option><option value="Chapai Nawabganj">Chapai Nawabganj</option><option value="Pabna">Pabna</option><option value="Sirajganj">Sirajganj</option>';
    }

    // set Sylhet division districts
    else if (diviList == 'Sylhet') {
        var disctList = '<option disabled selected>Select Division</option><option value="Sylhet">Sylhet</option><option value="Habiganj">Habiganj</option><option value="Moulvibazar">Moulvibazar</option><option value="Sunamganj">Sunamganj</option>';
    }
    //  set/send districts name to District lists from division
    document.getElementById("distr").innerHTML = disctList;
}
// Thana Section select
function thanaList() {
    var DisList = document.getElementById('distr').value;
    // Set Dhaka District Upazila
    if (DisList == 'Dhaka') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Dhamrai">Dhamrai</option><option value="Dohar">Dohar</option><option value="Keraniganj">Keraniganj</option><option value="Nawabganj">Nawabganj</option><option value="Savar">Savar</option><option value="Tejgaon Circle">Tejgaon Circle</option>';
    }
    // Set Faridpur District Upazila
    else if (DisList == 'Faridpur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Alfadanga">Alfadanga</option><option value="Bhanga">Bhanga</option><option value="Boalmari">Boalmari</option><option value="Faridpur Sadar">Faridpur Sadar</option><option value="Madhukhali">Madhukhali</option><option value="Nagarkanda">Nagarkanda</option><option value="Sadarpur">Sadarpur</option><option value="Saltha">Saltha</option>';
    }
    // Set Gazipur District Upazila
    else if (DisList == 'Gazipur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Gazipur Sadar">Gazipur Sadar</option><option value="Kaliakair">Kaliakair</option><option value="Kaliganj">Kaliganj</option><option value="Kapasia">Kapasia</option><option value="Sreepur">Sreepur</option>';
    }
    // Set Gopalganj District Upazila
    else if (DisList == 'Gopalganj') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Gopalganj Sadar">Gopalganj Sadar</option><option value="Kashiani">Kashiani</option><option value="Kotalipara">Kotalipara</option><option value="Muksudpur">Muksudpur</option><option value="Tungipara">Tungipara</option>';
    }
    // Set Kishoreganj District Upazila
    else if (DisList == 'Kishoreganj') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Austagram">Austagram</option><option value="Bajitpur">Bajitpur</option><option value="Bhairab">Bhairab</option><option value="Hossainpur">Hossainpur</option><option value="Itna">Itna</option><option value="Karimganj">Karimganj</option><option value="Katiadi">Katiadi</option><option value="Kishoreganj Sadar</option><option value="Kuliarchar">Kuliarchar</option><option value="Mithamoin">Mithamoin</option><option value="Nikli">Nikli</option><option value="Pakundia">Pakundia</option><option value="Tarail">Tarail</option>';
    }
    // Set Madaripur District Upazila
    else if (DisList == 'Madaripur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Madaripur Sadar">Madaripur Sadar</option><option value="Kalkini">Kalkini</option><option value="Rajoir">Rajoir</option><option value="Shibchar">Shibchar</option>';
    }
    // Set Manikganj District Upazila
    else if (DisList == 'Manikganj') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Manikganj Sadar">Manikganj Sadar</option><option value="Daulatpur">Daulatpur</option><option value="Ghior">Ghior</option><option value="Harirampur">Harirampur</option><option value="Saturia">Saturia</option><option value="Shivalaya">Shivalaya</option><option value="Singair">Singair</option>';
    }
    // Set Munshiganj District Upazila
    else if (DisList == 'Munshiganj') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Munshiganj Sadar">Munshiganj Sadar</option><option value="Gazaria">Gazaria</option><option value="Lauhajong">Lauhajong</option><option value="Harirampur">Harirampur</option><option value="Saturia">Saturia</option><option value="Sirajdikhan">Sirajdikhan</option><option value="Tongibari">Tongibari</option><option value="Sreenagar">Sreenagar</option>';
    }
    // Set Narayanganj District Upazila
    else if (DisList == 'Narayanganj') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Narayanganj Sadar">Narayanganj Sadar</option><option value="Araihazar">Araihazar</option><option value="Bandar">Bandar</option><option value="Rupganj">Rupganj</option><option value="Sonargaon">Sonargaon</option>';
    }
    // Set Narsingdi District Upazila
    else if (DisList == 'Narsingdi') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Narsingdi Sadar">Narsingdi Sadar</option><option value="Belabo">Belabo</option><option value="Monohardi">Monohardi</option><option value="Palash">Palash</option><option value="Raipura">Raipura</option><option value="Shibpur">Shibpur</option>';
    }
    // Set Rajbari District Upazila
    else if (DisList == 'Rajbari') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Rajbari Sadar">Rajbari Sadar</option><option value="Baliakandi">Baliakandi</option><option value="Goalanda">Goalanda</option><option value="Kalukhali">Kalukhali</option><option value="Pangsha">Pangsha</option>';
    }
    // Set Shariatpur District Upazila
    else if (DisList == 'Shariatpur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Shariatpur Sadar">Shariatpur Sadar</option><option value="Bhedarganj">Bhedarganj</option><option value="Damuddya">Damuddya</option><option value="Goshairhat">Goshairhat</option><option value="Janjira">Janjira</option><option value="Naria">Naria</option>';
    }
    // Set Tangail District Upazila
    else if (DisList == 'Tangail') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Tangail Sadar">Tangail Sadar</option><option value="Basail">Basail</option><option value="Bhuapur">Bhuapur</option><option value="Delduar">Delduar</option><option value="Dhanbari">Dhanbari</option><option value="Ghatail">Ghatail</option><option value="Gopalpur">Gopalpur</option><option value="Kalihati">Kalihati</option><option value="Madhupur">Madhupur</option><option value="Mirzapur">Mirzapur</option><option value="Nagarpur">Nagarpur</option><option value="Shakhipur">Shakhipur</option>';
    }
    // Set Bandarban District Upazila
    else if (DisList == 'Bandarban') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Bandarban Sadar">Bandarban Sadar</option><option value="Alikadam">Alikadam</option><option value="Lama">Lama</option><option value="Naikhyongchari">Naikhyongchari</option><option value="Rowangchari">Rowangchari</option><option value="Ruma">Ruma</option><option value="Thanchi">Thanchi</option>';
    }
    // Set Bandarban District Upazila
    else if (DisList == 'Chandpur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Chandpur Sadar">Chandpur Sadar</option><option value="Faridganj">Faridganj</option><option value="Haimchar">Haimchar</option><option value="Haziganj">Haziganj</option><option value="Kachua">Kachua</option><option value="Matlab Dakshin">Matlab Dakshin</option><option value="Matlab Uttar">Matlab Uttar</option>';
    }
    // Set Chattogram District Upazila
    else if (DisList == 'Chattogram') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Anwara">Anwara</option><option value="Banskhali">Banskhali</option><option value="Boalkhali">Boalkhali</option><option value="Chandanish">Chandanish</option><option value="Fatikchari">Fatikchari</option><option value="Hathazari">Hathazari</option><option value="Karnaphuli">Karnaphuli</option><option value="Lohagara">Lohagara</option><option value="Mirsharai">Mirsharai</option><option value="Patiya">Patiya</option><option value="Rangunia">Rangunia</option><option value="Raojan">Raojan</option><option value="Sandwip">Sandwip</option><option value="Satkania">Satkania</option><option value="Sitakunda">Sitakunda</option>';
    }
    // Set Cox\'s Bazar District Upazila
    else if (DisList == 'Cox\'s Bazar') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Cox\'s Bazar Sadar">Cox\'s Bazar Sadar</option><option value="Chakoria">Chakoria</option><option value="Kutubdia">Kutubdia</option><option value="Teknaf">Teknaf</option><option value="Ramu">Ramu</option><option value="Moheskhali">Moheskhali</option><option value="Ukhiya">Ukhiya</option><option value="Pekua">Pekua</option>';
    }
    // Set Cumilla District Upazila
    else if (DisList == 'Cumilla') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Cumilla Sadar">Cumilla Sadar</option><option value="Barura">Barura</option><option value="Brahmanpara">Brahmanpara</option><option value="Burichong">Burichong</option><option value="Chandina">Chandina</option><option value="Chouddagram">Chouddagram</option><option value="Cumilla-S Daksin">Cumilla-S Daksin</option><option value="Daudkandi">Daudkandi</option><option value="Debidwar">Debidwar</option><option value="Homna">Homna</option><option value="Laksham">Laksham</option><option value="Lalmai">Lalmai</option><option value="Meghna">Meghna</option><option value="Monohorganj">Monohorganj</option><option value="Muradnagar">Muradnagar</option><option value="Nangalkot">Nangalkot</option><option value="Titas">Titas</option>';
    }
    // Set Feni District Upazila
    else if (DisList == 'Feni') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Feni Sadar">Feni Sadar</option><option value="Chhagalniya">Chhagalniya</option><option value="Daganbhuiyan">Daganbhuiyan</option><option value="Fulgazi">Fulgazi</option><option value="Porshuram">Porshuram</option><option value="Sonagazi">Sonagazi</option>';
    }
    // Set Khagrachhari District Upazila
    else if (DisList == 'Khagrachhari') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Khagrachhari Sadar">Khagrachhari Sadar</option><option value="Dighinala">Dighinala</option><option value="Guimara">Guimara</option><option value="Laxmichari">Laxmichari</option><option value="Mahalchari">Mahalchari</option><option value="Manikchari">Manikchari</option><option value="Matiranga">Matiranga</option><option value="Panchari">Panchari</option><option value="Ramgarh">Ramgarh</option>';
    }
    // Set Noakhali District Upazila
    else if (DisList == 'Noakhali') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Noakhali Sadar">Noakhali Sadar</option><option value="Begumganj">Begumganj</option><option value="Chatkhil">Chatkhil</option><option value="Companiganj">Companiganj</option><option value="Hatiya">Hatiya</option><option value="Kabir Hat">Kabir Hat</option><option value="Senbag">Senbag</option><option value="Sonaimuri">Sonaimuri</option><option value="Subarna Char">Subarna Char</option>';
    }
    // Set Rangamati District Upazila
    else if (DisList == 'Rangamati') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Rangamati Sadar">Rangamati Sadar</option><option value="Baghaichari">Baghaichari</option><option value="Barkal">Barkal</option><option value="Belaichari">Belaichari</option><option value="Juraichari">Juraichari</option><option value="Kaptai">Kaptai</option><option value="Kaukhali">Kaukhali</option><option value="Langadu">Langadu</option><option value="Nanniarchar">Nanniarchar</option><option value="Rajosthali">Rajosthali</option>';
    }
    // Set Barguna District Upazila
    else if (DisList == 'Barguna') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Barguna Sadar">Barguna Sadar</option><option value="Amtali">Amtali</option><option value="Bamna">Bamna</option><option value="Betagi">Betagi</option><option value="Patharghata">Patharghata</option><option value="Taltali">Taltali</option>';
    }
    // Set Barishal District Upazila
    else if (DisList == 'Barishal') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Barishal Sadar">Barishal Sadar</option><option value="Agailjhara">Agailjhara</option><option value="Babuganj">Babuganj</option><option value="Bakerganj">Bakerganj</option><option value="Banaripara">Banaripara</option><option value="Gouranadi">Gouranadi</option><option value="Hizla">Hizla</option><option value="Mehendiganj">Mehendiganj</option><option value="Uzirpur">Uzirpur</option><option value="Gouranadi">Gouranadi</option>';
    }
    // Set Bhola District Upazila
    else if (DisList == 'Bhola') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Bhola Sadar">Bhola Sadar</option><option value="Borhanuddin">Borhanuddin</option><option value="Charfassion">Charfassion</option><option value="Daulatkhan">Daulatkhan</option><option value="Lalmohan">Lalmohan</option><option value="Monpura">Monpura</option><option value="Tazumuddin">Tazumuddin</option>';
    }
    // Set Jhalokati District Upazila
    else if (DisList == 'Jhalokati') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Jhalokati Sadar">Jhalokati Sadar</option><option value="Kathalia">Kathalia</option><option value="Nalchity">Nalchity</option><option value="Rajapur">Rajapur</option>';
    }
    // Set Patuakhali District Upazila
    else if (DisList == 'Patuakhali') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Patuakhali Sadar">Patuakhali Sadar</option><option value="Bauphal">Bauphal</option><option value="Dashmina">Dashmina</option><option value="Dumki">Dumki</option><option value="Galachipa">Galachipa</option><option value="Kalapara">Kalapara</option><option value="Mirjaganj">Mirjaganj</option><option value="Rangabali">Rangabali</option>';
    }
    // Set Pirojpur District Upazila
    else if (DisList == 'Pirojpur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Pirojpur Sadar">Pirojpur Sadar</option><option value="Bhandaria">Bhandaria</option><option value="Kawkhali">Kawkhali</option><option value="Mothbaria">Mothbaria</option><option value="Nazirpur">Nazirpur</option><option value="Nesarabad">Nesarabad</option><option value="Zianagar">Zianagar</option>';
    }
    // Set Khulna District Upazila
    else if (DisList == 'Khulna') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Batiaghata">Batiaghata</option><option value="Dacope">Dacope</option><option value="Dighalia">Dighalia</option><option value="Dumuria">Dumuria</option><option value="Koira">Koira</option><option value="Paikgacha">Paikgacha</option><option value="Phultala">Phultala</option><option value="Rupsa">Rupsa</option><option value="Terokhada">Terokhada</option>';
    }
    // Set Bagerhat District Upazila
    else if (DisList == 'Bagerhat') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Bagerhat Sadar">Bagerhat Sadar</option><option value="Chitalmari">Chitalmari</option><option value="Fakirhat">Fakirhat</option><option value="Kachua">Kachua</option><option value="Mollahat">Mollahat</option><option value="Mongla">Mongla</option><option value="Morrelganj">Morrelganj</option><option value="Rampal">Rampal</option><option value="Sharankhola">Sharankhola</option>';
    }
    // Set Chuadanga District Upazila
    else if (DisList == 'Chuadanga') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Chuadanga Sadar">Chuadanga Sadar</option><option value="Alamdanga">Alamdanga</option><option value="Damurhuda">Damurhuda</option><option value="Jibannagar">Jibannagar</option>';
    }
    // Set Jashore District Upazila
    else if (DisList == 'Jashore') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Jashore Sadar">Jashore Sadar</option><option value="Abhoynagar">Abhoynagar</option><option value="Bagherpara">Bagherpara</option><option value="Chowgacha">Chowgacha</option><option value="Jhikargacha">Jhikargacha</option><option value="Keshabpur">Keshabpur</option><option value="Monirampur">Monirampur</option><option value="Sarsha">Sarsha</option>';
    }
    // Set Jhenaidah District Upazila
    else if (DisList == 'Jhenaidah') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Jhenaidah Sadar">Jhenaidah Sadar</option><option value="Harinakunda">Harinakunda</option><option value="Kaliganj">Kaliganj</option><option value="Kotchandpur">Kotchandpur</option><option value="Maheshpur">Maheshpur</option><option value="Shailkupa">Shailkupa</option>';
    }
    // Set Kushtia District Upazila
    else if (DisList == 'Kushtia') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Kushtia Sadar">Kushtia Sadar</option><option value="Bheramara">Bheramara</option><option value="Daulatpur">Daulatpur</option><option value="Khoksha">Khoksha</option><option value="Kumarkhali">Kumarkhali</option><option value="Mirpur">Mirpur</option>';
    }
    // Set Magura District Upazila
    else if (DisList == 'Magura') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Magura Sadar">Magura Sadar</option><option value="Mohammadpur">Mohammadpur</option><option value="Salikha">Salikha</option><option value="Sreepur">Sreepur</option>';
    }
    // Set Meherpur District Upazila
    else if (DisList == 'Meherpur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Meherpur Sadar">Meherpur Sadar</option><option value="Gangni">Gangni</option><option value="Mujib Nagar">Mujib Nagar</option>';
    }
    // Set Narail District Upazila
    else if (DisList == 'Narail') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Narail Sadar">Narail Sadar</option><option value="Kalia">Kalia</option><option value="Lohagara">Lohagara</option>';
    }
    // Set Satkhira District Upazila
    else if (DisList == 'Satkhira') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Satkhira Sadar">Satkhira Sadar</option><option value="Assasuni">Assasuni</option><option value="Debhata">Debhata</option><option value="Kalaroa">Kalaroa</option><option value="Kaliganj">Kaliganj</option><option value="Shyamnagar">Shyamnagar</option><option value="Tala">Tala</option>';
    }
    // Set Mymensingh District Upazila
    else if (DisList == 'Mymensingh') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Mymensingh Sadar">Mymensingh Sadar</option><option value="Bhaluka">Bhaluka</option><option value="Dhobaura">Dhobaura</option><option value="Fulbaria">Fulbaria</option><option value="Gaffargaon">Gaffargaon</option><option value="Gouripur">Gouripur</option><option value="Haluaghat">Haluaghat</option><option value="Ishwarganj">Ishwarganj</option><option value="Muktagacha">Muktagacha</option><option value="Nandail">Nandail</option><option value="Phulpur">Phulpur</option><option value="Tarakanda">Tarakanda</option><option value="Trishal">Trishal</option>';
    }
    // Set Netrokona District Upazila
    else if (DisList == 'Netrokona') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Netrokona Sadar">Netrokona Sadar</option><option value="Atpara">Atpara</option><option value="Barhatta">Barhatta</option><option value="Durgapur">Durgapur</option><option value="Kalmakanda">Kalmakanda</option><option value="Kendua">Kendua</option><option value="Khaliajuri">Khaliajuri</option><option value="Madan">Madan</option><option value="Mohanganj">Mohanganj</option><option value="Purbadhala">Purbadhala</option>';
    }
    // Set Jamalpur District Upazila
    else if (DisList == 'Jamalpur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Jamalpur Sadar">Jamalpur Sadar</option><option value="Bakshiganj">Bakshiganj</option><option value="Dewanganj">Dewanganj</option><option value="Islampur">Islampur</option><option value="Madarganj">Madarganj</option><option value="Melendah">Melendah</option><option value="Sarishabari">Sarishabari</option>';
    }
    // Set Sherpur District Upazila
    else if (DisList == 'Sherpur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Sherpur Sadar">Sherpur Sadar</option><option value="Jhenaigati">Jhenaigati</option><option value="Nakla">Nakla</option><option value="Nalitabari">Nalitabari</option><option value="Sreebordi">Sreebordi</option>';
    }
    // Set Rajshahi District Upazila
    else if (DisList == 'Rajshahi') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Bagha">Bagha</option><option value="Bagmara">Bagmara</option><option value="Charghat">Charghat</option><option value="Durgapur">Durgapur</option><option value="Godagari">Godagari</option><option value="Mohanpur">Mohanpur</option><option value="Paba">Paba</option><option value="Puthia">Puthia</option><option value="Tanore">Tanore</option>';
    }
    // Set Bogra District Upazila
    else if (DisList == 'Bogra') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Bogra Sadar">Bogra Sadar</option><option value="Adamdighi">Adamdighi</option><option value="Dhunot">Dhunot</option><option value="Dhupchancia">Dhupchancia</option><option value="Gabtali">Gabtali</option><option value="Kahaloo">Kahaloo</option><option value="Nandigram">Nandigram</option><option value="Sariakandi">Sariakandi</option><option value="Shajahanpur">Shajahanpur</option><option value="Sherpur">Sherpur</option><option value="Shibganj">Shibganj</option><option value="Sonatala">Sonatala</option>';
    }
    // Set Joypurhat District Upazila
    else if (DisList == 'Joypurhat') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Joypurhat Sadar">Joypurhat Sadar</option><option value="Akkelpur">Akkelpur</option><option value="Kalai">Kalai</option><option value="Khetlal">Khetlal</option><option value="Panchbibi">Panchbibi</option>';
    }
    // Set Naogaon District Upazila
    else if (DisList == 'Naogaon') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Naogaon Sadar">Naogaon Sadar</option><option value="Atrai">Atrai</option><option value="Badalgachi">Badalgachi</option><option value="Dhamoirhat">Dhamoirhat</option><option value="Manda">Manda</option><option value="Mohadevpur">Mohadevpur</option><option value="Niamatpur">Niamatpur</option><option value="Raninagar">Raninagar</option><option value="Shapahar">Shapahar</option><option value="Porsha">Porsha</option>';
    }
    // Set Natore District Upazila
    else if (DisList == 'Natore') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Natore Sadar">Natore Sadar</option><option value="Bagatipara">Bagatipara</option><option value="Baraigram">Baraigram</option><option value="Gurudaspur">Gurudaspur</option><option value="Lalpur">Lalpur</option><option value="Naldanga">Naldanga</option><option value="Singra">Singra</option>';
    }
    // Set Chapai Nawabganj District Upazila
    else if (DisList == 'Chapai Nawabganj') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Chapai Nawabganj Sadar">Chapai Nawabganj Sadar</option><option value="Bholahat">Bholahat</option><option value="Gomostapur">Gomostapur</option><option value="Nachol">Nachol</option><option value="Shibganj">Shibganj</option>';
    }
    // Set Pabna District Upazila
    else if (DisList == 'Pabna') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Pabna Sadar">Pabna Sadar</option><option value="Atghoria">Atghoria</option><option value="Bera">Bera</option><option value="Bhangura">Bhangura</option><option value="Chatmohar">Chatmohar</option><option value="Faridpur">Faridpur</option><option value="Ishwardi">Ishwardi</option><option value="Santhia">Santhia</option><option value="Sujanagar">Sujanagar</option>';
    }
    // Set Sirajganj District Upazila
    else if (DisList == 'Sirajganj') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Sirajganj Sadar">Sirajganj Sadar</option><option value="Belkuchi">Belkuchi</option><option value="Chowhali">Chowhali</option><option value="Kamarkhand">Kamarkhand</option><option value="Kazipur">Kazipur</option><option value="Raiganj">Raiganj</option><option value="Shahzadpur">Shahzadpur</option><option value="Tarash">Tarash</option><option value="Ullapara">Ullapara</option>';
    }
    // Set Rangpur District Upazila
    else if (DisList == 'Rangpur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Rangpur Sadar">Rangpur Sadar</option><option value="Badarganj">Badarganj</option><option value="Gangachara">Gangachara</option><option value="Kaunia">Kaunia</option><option value="Mithapukur">Mithapukur</option><option value="Pirgacha">Pirgacha</option><option value="Pirganj">Pirganj</option><option value="Taraganj">Taraganj</option>';
    }
    // Set Dinajpur District Upazila
    else if (DisList == 'Dinajpur') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Dinajpur Sadar">Dinajpur Sadar</option><option value="Birampur">Birampur</option><option value="Birganj">Birganj</option><option value="Birol">Birol</option><option value="Bochaganj">Bochaganj</option><option value="Chirirbandar">Chirirbandar</option><option value="Fulbari">Fulbari</option><option value="Ghoraghat">Ghoraghat</option><option value="Hakimpur">Hakimpur</option><option value="Kaharol">Kaharol</option><option value="Khanshama">Khanshama</option><option value="Nawabganj">Nawabganj</option><option value="Parbatipur">Parbatipur</option>';
    }
    // Set Gaibandha District Upazila
    else if (DisList == 'Gaibandha') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Gaibandha Sadar">Gaibandha Sadar</option><option value="Fulchari">Fulchari</option><option value="Gobindaganj">Gobindaganj</option><option value="Palashbari">Palashbari</option><option value="Sadullapur">Sadullapur</option><option value="Saghata">Saghata</option><option value="Sundarganj">Sundarganj</option>';
    }
    // Set Kurigram District Upazila
    else if (DisList == 'Kurigram') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Kurigram Sadar">Kurigram Sadar</option><option value="Bhurungamari">Bhurungamari</option><option value="Chilmari">Chilmari</option><option value="Fulbari">Fulbari</option><option value="Nageswari">Nageswari</option><option value="Rajarhat">Rajarhat</option><option value="Rajibpur">Rajibpur</option><option value="Rowmari">Rowmari</option><option value="Ulipur">Ulipur</option>';
    }
    // Set Lalmonirhat District Upazila
    else if (DisList == 'Lalmonirhat') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Lalmonirhat Sadar">Lalmonirhat Sadar</option><option value="Aditmari">Aditmari</option><option value="Hatibandha">Hatibandha</option><option value="Kaliganj">Kaliganj</option><option value="Patgram">Patgram</option>';
    }
    // Set Nilphamari District Upazila
    else if (DisList == 'Nilphamari') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Saidpur">Saidpur</option><option value="Nilphamari Sadar">Nilphamari Sadar</option><option value="Dimla">Dimla</option><option value="Domar">Domar</option><option value="Jaldhaka">Jaldhaka</option><option value="Kishoreganj">Kishoreganj</option>';
    }
    // Set Panchagarh District Upazila
    else if (DisList == 'Panchagarh') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Panchagarh Sadar">Panchagarh Sadar</option><option value="Atwari">Atwari</option><option value="Boda">Boda</option><option value="Debiganj">Debiganj</option><option value="Tetulia">Tetulia</option>';
    }
    // Set Thakurgaon District Upazila
    else if (DisList == 'Thakurgaon') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Thakurgaon Sadar">Thakurgaon Sadar</option><option value="Baliadangi">Baliadangi</option><option value="Haripur">Haripur</option><option value="Pirganj">Pirganj</option><option value="Ranisankail">Ranisankail</option>';
    }
    // Set Sylhet District Upazila
    else if (DisList == 'Sylhet') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Sylhet Sadar">Sylhet Sadar</option><option value="Balaganj">Balaganj</option><option value="Beanibazar">Beanibazar</option><option value="Biswanath">Biswanath</option><option value="Companiganj">Companiganj</option><option value="Dakshin Surma">Dakshin Surma</option><option value="Fenchuganj">Fenchuganj</option><option value="Golapganj">Golapganj</option><option value="Gowainghat">Gowainghat</option><option value="Jointiapur">Jointiapur</option><option value="Kanaighat">Kanaighat</option><option value="Osmaninagar">Osmaninagar</option><option value="Zakiganj">Zakiganj</option>';
    }
    // Set Habiganj District Upazila
    else if (DisList == 'Habiganj') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Habiganj Sadar">Habiganj Sadar</option><option value="Azmiriganj">Azmiriganj</option><option value="Bahubal">Bahubal</option><option value="Baniachong">Baniachong</option><option value="Chunarughat">Chunarughat</option><option value="Lakhai">Lakhai</option><option value="Madhabpur">Madhabpur</option><option value="Nabiganj">Nabiganj</option><option value="Sayestaganj">Sayestaganj</option>';
    }
    // Set Moulvibazar District Upazila
    else if (DisList == 'Moulvibazar') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Moulvibazar Sadar">Moulvibazar Sadar</option><option value="Barlekha">Barlekha</option><option value="Juri">Juri</option><option value="Kamalganj">Kamalganj</option><option value="Kulaura">Kulaura</option><option value="Rajnagar">Rajnagar</option><option value="Sreemangal">Sreemangal</option>';
    }
    // Set Sunamganj District Upazila
    else if (DisList == 'Sunamganj') {
        var thanaList = '<option disabled selected>Select Upazila</option><option value="Sunamganj Sadar">Sunamganj Sadar</option><option value="Biswamvarpur">Biswamvarpur</option><option value="Chatak">Chatak</option><option value="Dakhin Sunamganj">Dakhin Sunamganj</option><option value="Derai">Derai</option><option value="Dharmapasha">Dharmapasha</option><option value="Doarabazar">Doarabazar</option><option value="Jagannathpur">Jagannathpur</option><option value="Jamalganj">Jamalganj</option><option value="Sulla">Sulla</option><option value="Tahirpur">Tahirpur</option>';
    }
    document.getElementById("upazila").innerHTML = thanaList;
}