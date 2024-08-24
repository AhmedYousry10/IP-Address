# Get Data on Address IP

This is a simple HTML project that fetches and displays the user's public IP address and related geolocation data using the `ipify` and `ipapi` APIs.

## Features

- **Fetch Public IP**: The application retrieves the user's public IP address.
- **Display Geolocation Data**: It fetches and displays additional geolocation data related to the IP address, including country, region, city, and more.

## How It Works

1. The script starts by displaying "loading..." while the data is being fetched.
2. It fetches the public IP address using the `ipify` API.
3. Once the IP address is retrieved, it fetches additional data related to that IP using the `ipapi` API.
4. The IP address is displayed in the `<p>` element, and the geolocation data is formatted and displayed in a `<pre>` element.

## Technologies Used

- **HTML**: For the basic structure of the page.
- **JavaScript**: For fetching the IP address and geolocation data from external APIs.
- **APIs Used**:
  - [ipify](https://www.ipify.org/): To get the public IP address.
  - [ipapi](https://ipapi.co/): To get geolocation data based on the IP address.

## How to Use

1. Clone the repository or download the HTML file.
2. Open the HTML file in any web browser.
3. The page will automatically display your public IP address and related geolocation data.

## Example Output

Your public IP address is : 123.45.67.89

{
  "ip": "123.45.67.89",
  "network": "123.45.16.0/20",
  "version": "IPv4",
  "city": "Cairo",
  "region": "Cairo Governorate",
  "region_code": "CA",
  "country": "EG",
  "country_name": "Egypt",
  "country_code": "EG",
  "country_code_iso3": "EGY",
  "country_capital": "Cairo",
  "country_tld": ".eg",
  "continent_code": "AF",
  "in_eu": false,
  "postal": null,
  "latitude": 12.34567,
  "longitude": 12.3456,
  "timezone": "Africa/Cairo",
  "utc_offset": "+0300",
  "country_calling_code": "+20",
  "currency": "EGP",
  "currency_name": "Pound",
  "languages": "ar-EG,en,fr",
  "country_area": 1001450,
  "country_population": 98423595,
  "asn": "AS8452",
  "org": "TE Data"
}

## Developer Info

Name : Ahmed Yousry Helal
Email : ahmedu3helal@gmail.com
Linkedin : https://www.linkedin.com/in/ahmed-yousry-helal/
Phone : +201007458070