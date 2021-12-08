import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface FormValues {
  firstName: String;
  lastName: String;
  nickName: String;
  password: String;
  email: String;
  mobileNumber: number;
  gender: GenderEnum;
  job: String;
  sector: String;
  salaryRange: String;
  url: String;
}

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className="container">
          <Row>
            <Col>
              <h1>FORM</h1>
              <input
                type="text"
                placeholder="İsim (Gerekli)"
                {...register("firstName", {
                  required: true,
                  max: 20,
                  min: 5,
                  maxLength: 20,
                  pattern: /[A - Za - zöçİğüÖÇĞÜşŞ]/,
                })}
              />
              {errors.firstName && (
                <p>Minimum 3 karakter Maksimum 20 Karakter Giriniz.</p>
              )}
              <input
                type="text"
                placeholder="Soyisim (Gerekli)"
                {...register("lastName", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                  pattern: /[A - Za - zöçİğüÖÇĞÜşŞ]/,
                })}
              />
              {errors.lastName && (
                <p>Minimum 3 karakter Maksimum 20 Karakter Giriniz.</p>
              )}
              <input
                type="tel"
                placeholder="Telefon Numarası (Gerekli)"
                {...register("mobileNumber", {
                  required: true,
                  maxLength: 10,
                  minLength: 10,
                  pattern: /^[0-9]+$/,
                })}
              />
              {errors.mobileNumber && (
                <p>Telefon Numaranızı Başında 0 Olmadan Yazınız.</p>
              )}

              <input
                type="text"
                placeholder="Kullanıcı Adı (Gerekli)"
                {...register("nickName", {
                  required: true,
                  maxLength: 20,
                  minLength: 5,
                  pattern: /[az - ZA - Z - 0-9]/,
                })}
              />
              {errors.nickName && (
                <p>Minimum 5 Maksimium 20 Karakter veya Sayı Giriniz</p>
              )}
              <input
                type="text"
                placeholder="Email (Gerekli)"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && <p>Lütfen Geçerli Email Giriniz</p>}
              <input
                type="password"
                placeholder="Şifre (Gerekli)  "
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 15,
                  pattern:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                })}
              />
              {errors.password && (
                <p>
                  Şifreniz 8 ile 15 Arasında Özel ifade Büyük/Küçük Harf ve Sayı
                  içermelidir.
                </p>
              )}
              <input
                type="url"
                placeholder="Web Site Adresiniz (Opsiyonel)"
                {...register("url")}
              />
              {errors.url && <p style={{ display: "inline-block" }}>*</p>}
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <div className="option">
                <select {...register("job", { required: true })}>
                  <option value="">Mesleğinizi Seçiniz</option>
                  <option value="engineer">Mühendis</option>
                  <option value="police">Polis</option>
                  <option value="developer">Yazılım Geliştiricisi</option>
                  <option value="dentist">Dişçi</option>
                  <option value="doctor">Doktor</option>
                  <option value="driver">Şöför</option>
                  <option value="farmer">Çiftçi</option>
                  <option value="electrian">Elektrikçi</option>
                  <option value="jeweller">Kuyumcu</option>
                  <option value="banker">Bankacı</option>
                  <option value="student">Öğrenci</option>
                  <option value="soldier">Asker</option>
                  <option value="other">Diğer</option>
                </select>
                {errors.job && <p style={{ display: "inline-block" }}>*</p>}
              </div>
              <div className="option">
                <select {...register("salaryRange", { required: true })}>
                  <option value="">Gelirinizi Seçiniz</option>
                  <option value="0-1000">0-1000 ₺</option>
                  <option value="1000-3000">1000-3000 ₺</option>
                  <option value="3000-5000">3000-5000 ₺</option>
                  <option value="5000-10000">5000-10000 ₺</option>
                  <option value="10000-50000">10000-50000 ₺</option>
                  <option value="50000+">50000+ ₺</option>
                </select>
                {errors.salaryRange && (
                  <p style={{ display: "inline-block" }}>*</p>
                )}
              </div>
              <div className="option">
                <select {...register("gender", { required: true })}>
                  <option value="">Cinsiyetinizi Seçiniz</option>
                  <option value="male">Erkek</option>
                  <option value="female">Kadın</option>
                  <option value="other">Belirtmek istemiyorum</option>
                </select>
                {errors.gender && <p style={{ display: "inline-block" }}>*</p>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <button type="submit" className="submit">
                Gönder
              </button>
              <button
                type="button"
                className="dont-show-errors"
                onClick={() => clearErrors()}
              >
                Hataları Gösterme
              </button>
              <button
                className="reset-btn"
                type="button"
                onClick={() => reset()}
                value="Reset with values"
              >
                Resetle
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
}
