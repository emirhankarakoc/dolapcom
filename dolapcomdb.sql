PGDMP     :    0                 {            dolapcomDatabase    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            	           1262    25237    dolapcomDatabase    DATABASE     �   CREATE DATABASE "dolapcomDatabase" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Turkish_Turkey.1254';
 "   DROP DATABASE "dolapcomDatabase";
                postgres    false            �            1259    25238    fotograflar_linkleri    TABLE     x   CREATE TABLE public.fotograflar_linkleri (
    product_id integer NOT NULL,
    fotograf_link character varying(255)
);
 (   DROP TABLE public.fotograflar_linkleri;
       public         heap    postgres    false            �            1259    25242 	   productdb    TABLE     �  CREATE TABLE public.productdb (
    id integer NOT NULL,
    begeni_sayisi integer,
    satici_puani integer,
    saticinin_foto_linki text,
    saticinin_kullanici_adi character varying(255),
    saticinin_yildiz_sayisi integer,
    urun_aciklama text,
    urun_baslik character varying(255),
    urun_rengi character varying(255),
    fiyati integer,
    urunun_yuksek_fiyati integer,
    urununrgbkodu character varying(255),
    fotograf_link1 text,
    fotograf_link2 text,
    fotograf_link3 text,
    fotograf_link4 text,
    ust_menu_urun_yolu character varying(255),
    kargo_ucreti character varying(255),
    yeni_ve_etiketli character varying(255)
);
    DROP TABLE public.productdb;
       public         heap    postgres    false            �            1259    25241    productdb_id_seq    SEQUENCE     �   CREATE SEQUENCE public.productdb_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.productdb_id_seq;
       public          postgres    false    216            
           0    0    productdb_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.productdb_id_seq OWNED BY public.productdb.id;
          public          postgres    false    215            �            1259    25250    ust_menu_urun_yollari    TABLE     ~   CREATE TABLE public.ust_menu_urun_yollari (
    product_id integer NOT NULL,
    ust_menu_urun_yolu character varying(255)
);
 )   DROP TABLE public.ust_menu_urun_yollari;
       public         heap    postgres    false            m           2604    25245    productdb id    DEFAULT     l   ALTER TABLE ONLY public.productdb ALTER COLUMN id SET DEFAULT nextval('public.productdb_id_seq'::regclass);
 ;   ALTER TABLE public.productdb ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216                       0    25238    fotograflar_linkleri 
   TABLE DATA           I   COPY public.fotograflar_linkleri (product_id, fotograf_link) FROM stdin;
    public          postgres    false    214   �                 0    25242 	   productdb 
   TABLE DATA           U  COPY public.productdb (id, begeni_sayisi, satici_puani, saticinin_foto_linki, saticinin_kullanici_adi, saticinin_yildiz_sayisi, urun_aciklama, urun_baslik, urun_rengi, fiyati, urunun_yuksek_fiyati, urununrgbkodu, fotograf_link1, fotograf_link2, fotograf_link3, fotograf_link4, ust_menu_urun_yolu, kargo_ucreti, yeni_ve_etiketli) FROM stdin;
    public          postgres    false    216   9                 0    25250    ust_menu_urun_yollari 
   TABLE DATA           O   COPY public.ust_menu_urun_yollari (product_id, ust_menu_urun_yolu) FROM stdin;
    public          postgres    false    217   Q                  0    0    productdb_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.productdb_id_seq', 13, true);
          public          postgres    false    215            o           2606    25249    productdb productdb_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.productdb
    ADD CONSTRAINT productdb_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.productdb DROP CONSTRAINT productdb_pkey;
       public            postgres    false    216            p           2606    25253 0   fotograflar_linkleri fk78cksrlfifb91n1p42brewiy0    FK CONSTRAINT     �   ALTER TABLE ONLY public.fotograflar_linkleri
    ADD CONSTRAINT fk78cksrlfifb91n1p42brewiy0 FOREIGN KEY (product_id) REFERENCES public.productdb(id);
 Z   ALTER TABLE ONLY public.fotograflar_linkleri DROP CONSTRAINT fk78cksrlfifb91n1p42brewiy0;
       public          postgres    false    3183    214    216            q           2606    25258 1   ust_menu_urun_yollari fki1qjiab4gsyshqwj74dvudcst    FK CONSTRAINT     �   ALTER TABLE ONLY public.ust_menu_urun_yollari
    ADD CONSTRAINT fki1qjiab4gsyshqwj74dvudcst FOREIGN KEY (product_id) REFERENCES public.productdb(id);
 [   ALTER TABLE ONLY public.ust_menu_urun_yollari DROP CONSTRAINT fki1qjiab4gsyshqwj74dvudcst;
       public          postgres    false    217    216    3183                �   x���A� �us�fR�gq��v��	��(���I�i�5��j�����vԣ�	ԓF�� Ͻ�#����s�/�s�>w�GH"V�v�xR��e�?���y�Ͻ�������/l���o�q��?0���_��"�⁷Z           x��V�n�F]�_1E�D�"%�@S(�k��"N��`\�Ci�!�����E��6�d���깔�8�]g�U%�|��̹�;Ғc�rǚ�����ߟ�j2{>+���?D뤌i�F:R��Y'�R�R�V�Ȋ�RB�>�\�.��e.h�a}�ʨZ_���G]���jC%���U�@��M��ATT�/��݀L)#���3Jkj��mu3Y'����K:����}�������Z��X���8�T�R���[�*��]���z�j���Œ_�s��H?��2�T*VV�� .^�'R�TI�����ԖdΥ���o�>�p{wc����G��?�f�+j�D�N���L�2��b��	�.����޶X�:%��ɷ�D���֍97��zp/����{�O�JM��e4Kkw�eJ"l�qa(\_@P��Q��B�|�E�=�e��p�X�TK˛p�>���-���=���N�s�oP��ѐ��$�lq<�u��J�X��qC K�B��f�dj )�J�g�<p˿�;�R�S�v���������	h��#�8�%ͨʄ�R��D�2J���R�?W�Ar�L-�������uD�N����������ri���^��ȶ�a[�\�Ԇ�lW�l�U��/��۩�:��C���N���s��(�K�[xP��hWp�M�+�+�L��"4E�,ٰ(݀{���������5�׫��j�|Y�_�vc����9����4��!��d��Gw�A;����tw��������
�כ���NJ��:��"��}��j�-�|ڣ�.)��B���^�i�z	*_g0�z��f��^bZ~�V��=��F���7��op��J:��v�i[����2�ng�M��ΑåU��W�E�� �S�D�*L��mkۢ)$i(�$Tb�z�Y�71���#�����+`^WnW�$'qBmB;]D��g�*�s�:i��GC9�y�Г�s])����ɉ���#X�ga�,R0��wȷ��/b�>�CHK�L����2�	��	�6sC�s�
���l)�|���Pj4���-��%�17�ꚑLziw@�&�01/����?��￰\	���y1S ��F��P��a�q���0�_=�p�g���ƞt� �ry_?�'�0��%ID����ȿ�
V�SP�T]2���q2��'�S��8�#;6���$���ND����[
Y�Sk�>吻��X}����دu�N�'lA2�Io[s�2����ǎ.�_���g�*������Y5CMi��â�f|Xdm��L!q�u��j���C��X���+�M������c�5N^|D���Q�sV�ǲ�v�MI1!��㗯�����՟O�<y.N'/��n�ڶ$��n㹔]X��P�c;Wu�d�C�HuM�^ր�^�"���Sޕt.�{����T��P��0�7�%����	\w�\n�@T����_��E�c��ʇ��o��v뾯����� ��q�         �   x�M�An�0EמS�!@�e���RUXv34r=�+;�n�8�l:�����|�	hO8^
s&"�'��L2OgJ���t�-a������t�JE��(����e1�JA+�l�Ա��Ӷ�����|�Zak���g�=&�4cs�?la���\�����e���Rϕ��vl�8��N�4���uY��P�����3z~><�+F�59���)������ �!y	     