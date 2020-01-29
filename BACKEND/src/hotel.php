<?php

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity()
* @ORM\Table(name="blog_article")
* */
class Hotel
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
    public $nom;

    /**
    * @ORM\Column(type="int")
    */
    public $prix;

    /**
    * @ORM\Column(type="string")
    */
    public $img;

    /**
    * @ORM\Column(type="string")
    */
    public $desc;
}