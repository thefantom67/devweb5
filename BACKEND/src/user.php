<?php

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity()
* @ORM\Table(name="blog_article")
* */
class User
{
    /**
    * @ORM\Id()
    * @ORM\GeneratedValue(strategy="AUTO")
    * @ORM\Column(type="integer")
    */
    public $id;

    /**
    * @ORM\Column(type="string")
    */
    public $prenom;

    /**
    * @ORM\Column(type="string")
    */
    public $nom;

    /**
    * @ORM\Column(type="string")
    */
    public $adresse;

    /**
    * @ORM\Column(type="int")
    */
    public $cp;

    /**
    * @ORM\Column(type="string")
    */
    public $ville;

    /**
    * @ORM\Column(type="int")
    */
    public $tel;

    /**
    * @ORM\Column(type="string")
    */
    public $email;

    /**
    * @ORM\Column(type="bool")
    */
    public $civ;

    /**
    * @ORM\Column(type="string")
    */
    public $login;

    /**
    * @ORM\Column(type="string")
    */
    public $password;

    /**
    * @ORM\Column(type="string")
    */
    public $pays;
}